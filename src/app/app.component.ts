import { Component } from '@angular/core';

import { Papper, CreatePapper } from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  hotPapper:Papper = {
    spiciness: 5,
    vegetableRating: 0,
    type: 'root',
    name: 'Hot papper',
    quantity: 20,
    weight: 0.23,
    price: 14.67,
    description: 'Hot papper from somewhere',
    country: 'Somwhere',
  };

  newPapper:CreatePapper = new CreatePapper(this.hotPapper);

}
