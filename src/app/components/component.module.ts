import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';

import { CardComponent } from './card/card.component';
import { SelectSortComponent } from './sort/select-sort.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { DialogBucketComponent } from './dialog-bucket/dialog-bucket.component';

import { CurrencyPipe } from '../Pipes/currency.pipe';
import { FirstToUppercase } from '../Pipes/firsttouppercase.pipe';

import { reducer } from '../reducers/bucket.reducer';

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
