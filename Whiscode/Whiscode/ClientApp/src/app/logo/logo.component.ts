import { Component, OnInit } from '@angular/core';
import { rtlEaseOutElasticAnimation } from '../animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss'],
  animations: [
    rtlEaseOutElasticAnimation
  ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
