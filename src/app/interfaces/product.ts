type grownOn = 'root' | 'berry';

export interface Product {
  name: string;
  type: string;
  quantity: number;
  weight: number;
  price: number;
  description: string;
  country: string;
  filename: string;
  id:number;
  grownOn?: grownOn;
}

export interface ProductAbstarct extends Product {
  getCost: (quntity: number) => number;
}
