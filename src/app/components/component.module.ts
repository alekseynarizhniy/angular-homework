import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';
import { SelectSortComponent } from './select-sort/select-sort.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { DialogBucketComponent } from './dialog-bucket/dialog-bucket.component';
import { DialogProductComponent } from './dialog-product/dialog-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DialogSignInComponent } from './dialog-sign-in/dialog-sign-in.component';

import { CurrencyPipe } from '../pipes/currency.pipe';
import { FirstToUppercase } from '../pipes/first-to-uppercase.pipe';

import { reducer } from '../reducers/bucket.reducer';

import { HightlightShadowDirective } from '../directives/hightlightshadow.directive';
import { DialogProductDirective } from '../directives/dialog-product.directive';

import { FilterProductService } from '../services/filter-product.service';
import { SortProductService } from '../services/sort-product.service';
import { UserService } from '../services/user.service';
import { RegistrationComponent } from './registration/registration.component';
import { DialogRegistrationComponent } from './dialog-registration/dialog-registration.component';

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
    DialogProductDirective,
    SignInComponent,
    DialogSignInComponent,
    RegistrationComponent,
    DialogRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot<any, any>({ addGoods: reducer }),
    MatPaginatorModule,
  ],
  exports: [MainComponent, HeaderComponent],
  providers: [FilterProductService, SortProductService, UserService],
  bootstrap: [],
})
export class ComponentModule {}
