import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commerce } from 'src/app/state/commerce/commerce.module';

@Component({
  selector: 'app-commerce-item',
  templateUrl: './commerce-item.component.html',
  styleUrls: ['./commerce-item.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms {{delay}}ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CommerceItemComponent {
  @Input() item: Commerce | undefined;
  @Input() index: number = 0;
  @Input() animationIndex: number = 0;

  public open: boolean = false;

  constructor() {
  }

}
