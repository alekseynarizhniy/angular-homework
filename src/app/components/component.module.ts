import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';

import { CardComponent } from './card/card.component';
import { SelectSortComponent } from './select-sort/select-sort.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { DialogBucketComponent } from './dialog-bucket/dialog-bucket.component';
import { DialogProductComponent } from './dialog-product/dialog-product.component';

import { CurrencyPipe } from '../pipes/currency.pipe';
import { FirstToUppercase } from '../pipes/firsttouppercase.pipe';

import { reducer } from '../reducers/bucket.reducer';

import { HightlightShadowDirective } from "../directives/hightlightshadow.directive";
import { DialogDirective } from "../directives/dialog.directive";

import { BucketAction } from "../interfaces/bucketAction";
import { ProductWrapper } from "../classes/Product";


@NgModule({
  declarations: [
    CardComponent,
    SelectSortComponent,
    MainComponent,
    HeaderComponent,
    BucketComponent,
    DialogBucketComponent,
    CurrencyPipe,
    FirstToUppercase,
    HightlightShadowDirective,
    DialogProductComponent,
    DialogDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    StoreModule.forRoot<any, any>({ addGoods: reducer }),
    MatPaginatorModule
  ],
  exports: [MainComponent, HeaderComponent],
  providers: [],
  bootstrap: [],
})
export class ComponentModule {}
