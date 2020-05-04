import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  @ViewChildren("section") sections: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

  }
}
