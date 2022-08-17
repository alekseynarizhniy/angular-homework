import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';

import { DataService } from './services/data.service';
import { GoodsService } from "./services/goods.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, GoodsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
