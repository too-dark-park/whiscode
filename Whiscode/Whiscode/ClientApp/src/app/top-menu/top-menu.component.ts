import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  displayNavigation: boolean = false;
  transition: string = ''; // Stops CSS animations playing on page load

  ngOnInit(): void {
  }

  toggleNavigation() {
    this.displayNavigation = !this.displayNavigation;
    if (this.transition == '') {
      this.transition = 'hide';
    }
  }
}
