import {
  trigger, group,
  transition, animate, style, state, keyframes
} from '@angular/animations';

//https://easings.net/#easeOutElastic
const rtlEaseOutElasticKeyframes = [
  style({ transform: 'translateX(100%)'}),
  style({ transform: 'translateX(-32.27%)'}),
  style({ transform: 'translateX(13.12%)'}),
  style({ transform: 'translateX(-4.63%)'}),
  style({ transform: 'translateX(1.64%)'}),
  style({ transform: 'translateX(-0.58%)'}),
  style({ transform: 'translateX(0.2%)'}),
  style({ transform: 'translateX(0%)'})
];

export const rtlEaseOutElasticAnimation = trigger('rtlEaseOutElastic', [
    state('in', style({
      transform: 'translateX(0)', opacity: 1
    })),
    state('out', style({
      transform: 'translateX(100%)', opacity: 0
    })),
    transition('* => in', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      group([
        animate('0.8s 0.6s', keyframes(rtlEaseOutElasticKeyframes)),
        animate('0.8s 0.5s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => out', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      group([
        animate('0.8s 0.6s', keyframes(rtlEaseOutElasticKeyframes.slice(0).reverse())),
        animate('0.8s 1s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]);
