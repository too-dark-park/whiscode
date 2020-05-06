import { Component, ViewChild, ElementRef, QueryList, Renderer2, HostListener, Input } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent {
  constructor(private renderer: Renderer2) { }

  sections: Array<ElementRef>;
  currentSectionIndex: number;
  showDot: boolean = false;
  showHeroImage: boolean = true;

  @ViewChild(SectionsComponent, { static: false }) set content(content: QueryList<ElementRef>) {
    if (content && content['sections'] && content['sections'].length > 0) {
      setTimeout(() => {
        this.sections = content['sections'].toArray();
        this.showDot = true;
        this.currentSectionIndex = -1
      }, 0);
    }
  }

  @ViewChild('up', { read: ElementRef }) up: ElementRef;
  @ViewChild('down', { read: ElementRef }) down: ElementRef;

  // TODO scrollDown / ScrollUp
  // Would be good to calculate the nearest section based on the user's screen position
  // When a user scrolls, the 'currentSectionIndex' is no longer valid
  scrollDown() {

    if (this.down.nativeElement.classList.contains('disabled')) {
      return;
    }

    if (this.sections[this.currentSectionIndex + 1]) {
      this.sections[this.currentSectionIndex += 1].nativeElement.scrollIntoView({ behavior: "smooth" });
      this.renderer.removeClass(this.up.nativeElement, 'disabled');

      // Can't really navigate one section
      // The user has been directed to the only one so no longer needed
      if (this.sections.length == 1) {
        this.showDot = false;
      }
    }

    if (!this.sections[this.currentSectionIndex + 1]) {
      this.renderer.addClass(this.down.nativeElement, 'disabled');
    }
  }

  scrollUp() {
    if (this.up.nativeElement.classList.contains('disabled')) {
      return;
    }

    if (this.sections[this.currentSectionIndex - 1]) {
      this.sections[this.currentSectionIndex -= 1].nativeElement.scrollIntoView({ behavior: "smooth" });
      this.renderer.removeClass(this.down.nativeElement, 'disabled');
    }

    if (!this.sections[this.currentSectionIndex - 1]) {
      this.renderer.addClass(this.up.nativeElement, 'disabled');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (!this.sections)
      return;

    if (this.showHeroImage && window.pageYOffset >= this.sections[0].nativeElement.offsetParent.offsetTop / 5) {
      this.showHeroImage = false;
    }

    if (!this.showHeroImage && window.pageYOffset <= this.sections[0].nativeElement.offsetParent.offsetTop / 5) {
      this.showHeroImage = true;
    }
  }
}
