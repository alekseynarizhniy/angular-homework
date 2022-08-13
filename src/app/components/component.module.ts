import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { SelectSortComponent } from './select-sort/select-sort.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { DialogSignInComponent } from './dialog-sign-in/dialog-sign-in.component';
import { DialogBucketComponent } from './dialog-bucket/dialog-bucket.component';
import { DialogProductComponent } from './dialog-product/dialog-product.component';
import { DialogRegistrationComponent } from './dialog-registration/dialog-registration.component';
import { AboutComponent } from './about/about.component';

import { CurrencyPipe } from '../pipes/currency.pipe';
import { FirstToUppercase } from '../pipes/first-to-uppercase.pipe';

import { reducer } from '../reducers/bucket.reducer';

import { HightlightShadowDirective } from '../directives/hightlightshadow.directive';
import { DialogProductDirective } from '../directives/dialog-product.directive';

import { FilterProductService } from '../services/filter-product.service';
import { SortProductService } from '../services/sort-product.service';
import { UserService } from '../services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { DialogProfileComponent } from './dialog-profile/dialog-profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
{ path: 'main', component: MainComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', component: MainComponent}
];

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
    AboutComponent,
    ProfileComponent,
    DialogProfileComponent,
    SignOutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    StoreModule.forRoot<any, any>({ addGoods: reducer }),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, HeaderComponent],
  providers: [FilterProductService, SortProductService, UserService],
  bootstrap: [],
})
export class ComponentModule {}
