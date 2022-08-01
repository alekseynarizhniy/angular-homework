import { ProductWrapper } from '../classes/Product';

export interface BucketAction {
  type: string;
  newvalue: ProductWrapper;
}
