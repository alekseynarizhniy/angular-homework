import { Component, Input } from '@angular/core';

import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() bucket!: Array<ProductWrapper>;
}
