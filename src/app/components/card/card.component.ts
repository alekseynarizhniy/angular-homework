import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: ProductWrapper;

  @Output() addItemEvent = new EventEmitter<ProductWrapper>();

  addProduct(event: any) {
    this.addItemEvent.emit(this.product);
  }
}
