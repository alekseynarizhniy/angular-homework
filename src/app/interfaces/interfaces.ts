type vegetableType = 'root' | 'berry'

export interface Product{
  name:string,
  quantity:number;
  weight:number;
  price:number,
  description:string,
  country:string,
}


export interface Vegetable extends Product{
  vegetableRating:number,
  type:vegetableType
}

export interface Papper extends Vegetable{
  spiciness:number
}

export interface Fruit extends Product{
  fruitRating:number
}

export class CreateProduct implements Product{
  name: string;
  quantity: number;
  weight: number;
  price: number;
  description: string;
  country: string;

  constructor(obj:Product){
    this.name = obj.name;
    this.quantity = obj.quantity;
    this.weight = obj.weight;
    this.price = obj.price;
    this.description = obj.description;
    this.country = obj.country;
  }

  getCost(quntityBuy:number):number{
    if(quntityBuy > this.quantity) throw new Error("Not enough goods");

    return this.price * quntityBuy;
  }
}

export class CreateVegetable extends CreateProduct{
  vegetableRating: number;
  type: vegetableType;

  constructor(obj:Vegetable){
    super(obj);
    this.vegetableRating = obj.vegetableRating;
    this.type = obj.type;
  }

}

export class CreatePapper extends CreateVegetable{
  spiciness:number;

  constructor(obj:Papper){
    super(obj);
    this.type = 'root';
    this.spiciness = obj.spiciness;
  }
}

export class CreateFruit extends CreateProduct{
  fruitRating: number;

  constructor(obj:Fruit){
    super(obj);
    this.fruitRating = obj.fruitRating;
  }
}
