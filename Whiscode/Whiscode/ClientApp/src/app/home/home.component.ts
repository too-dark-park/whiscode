import { Component, ViewChild, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private renderer: Renderer2) { }

  sections: Array<ElementRef>;
  currentSectionIndex: number;
  show: boolean = false;

  @ViewChild(SectionsComponent, { static: false }) set content(content: QueryList<ElementRef>) {
    if (content && content['sections'] && content['sections'].length > 0) {
      setTimeout(() => {
        this.sections = content['sections'].toArray();
        this.show = true;
        this.currentSectionIndex = -1
      }, 0);
    }
  }

  @ViewChild('up', { read: ElementRef }) up: ElementRef;
  @ViewChild('down', { read: ElementRef }) down: ElementRef;

  scrollDown() {

    if (this.down.nativeElement.classList.contains('disabled')) {
      return;
    }

    if (this.sections[this.currentSectionIndex + 1]) {
      this.sections[this.currentSectionIndex += 1].nativeElement.scrollIntoView({ behavior: "smooth" });
      this.renderer.removeClass(this.up.nativeElement, 'disabled');

      if (this.sections.length == 1) {
        this.show = false;
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
}
