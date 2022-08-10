import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductWrapper } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CopyBucketGuardGuard implements CanActivate {
  private goodsArray: ProductWrapper[] = [];

  constructor(public store: Store<any>) {
    this.store.select('addGoods').subscribe((val) => (this.goodsArray = val));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.goodsArray.length ? true : false;
  }

}
