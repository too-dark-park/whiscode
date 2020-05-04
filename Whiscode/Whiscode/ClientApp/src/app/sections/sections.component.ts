import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  @ViewChild("firstSection") firstSection: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
}
