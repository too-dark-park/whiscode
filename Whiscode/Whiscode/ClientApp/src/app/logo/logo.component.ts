import { Component, OnInit } from '@angular/core';
import { rtlEaseOutElasticAnimation } from '../animations';
import { ttbCubicAnimation } from '../animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    rtlEaseOutElasticAnimation,
    ttbCubicAnimation
  ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display: boolean = false;

  onAnimationEvent(event: AnimationEvent) {
    // Other ways you could do this could be sequence and delay on animation
    setTimeout(() => { this.display = true; }, 500);
  }
}
