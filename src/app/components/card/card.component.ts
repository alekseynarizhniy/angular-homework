import { Component, OnInit, Input } from '@angular/core';
import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: ProductWrapper;

  constructor() {}

  ngOnInit(): void {}
}
