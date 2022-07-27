import { Product, ProductClass } from '../interfaces/product';

export class ProductWrapper implements ProductClass {
  name: string;
  type: string;
  grownOn: any;
  quantity: number;
  weight: number;
  price: number;
  description: string;
  country: string;
  filename: string;

  constructor(obj: Product) {
    this.name = obj.name;
    this.type = obj.type;
    if (obj.grownOn == undefined) {
      this.grownOn = 'berry';
    } else {
      this.grownOn = obj.grownOn;
    }
    this.quantity = obj.quantity;
    this.weight = obj.weight;
    this.price = obj.price;
    this.description = obj.description;
    this.country = obj.country;
    this.filename = obj.filename;
  }

  getCost(quntityBuy: number): number {
    if (quntityBuy > this.quantity) throw new Error('Not enough goods');

    return this.price * quntityBuy;
  }
}
