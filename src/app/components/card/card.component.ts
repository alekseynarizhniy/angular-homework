import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: ProductWrapper;

  constructor(public store: Store<any>) {}

  addProduct() {
    this.store.dispatch({ type: 'add', newvalue: this.product });
  }
}
