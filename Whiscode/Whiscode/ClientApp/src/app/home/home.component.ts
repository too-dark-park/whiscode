import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit  {

  constructor() { }

  @ViewChild(SectionsComponent) sections: SectionsComponent;

  sectionView: ElementRef;

  ngAfterViewInit(): void {
    this.sectionView = this.sections.firstSection;
  }

  scrollDown() {
    this.sectionView.nativeElement.scrollIntoView({ behavior: "smooth" });

    // TODO implement scrollUp
    // TODO implement sibling scrolling
    // TODO update dot styles
  }
}
