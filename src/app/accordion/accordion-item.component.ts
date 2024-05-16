import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('default <=> rotated', animate('250ms'))
    ])
  ]
})
export class AccordionItemComponent {

  @Input() title: string = '';
  showBody = false;
  isArrowClicked = false;


  constructor() { }

  toggle() {
    this.showBody = !this.showBody;
    this.isArrowClicked = !this.isArrowClicked;
  }
  //   const arr = [1, 5, 3, 9, 2];
  // const maxValue = this.getMaxValue(arr);
  // console.log(maxValue); // Output: 9


  getMaxValue(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}

