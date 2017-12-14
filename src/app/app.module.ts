import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module'; //not lazy loaded
// import { AuthModule } from './auth/auth.module'; //not lazy loaded
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    // AuthModule,
    CatalogModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
