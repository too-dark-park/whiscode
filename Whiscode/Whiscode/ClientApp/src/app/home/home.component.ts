import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(SectionsComponent)
  set sections(x: SectionsComponent) {
    setTimeout(() => {
      this.sectionView = x?.firstSection
    }, 0);
  }

  sectionView: ElementRef;

  ngAfterViewInit(): void {
  }

  scrollDown() {
    this.sectionView.nativeElement.scrollIntoView({ behavior: "smooth" });

    // TODO implement scrollUp
    // TODO implement sibling scrolling
    // TODO update dot styles
  }
}
