import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from 'shared/shared.module';

import { CatalogModule } from './catalog/catalog.module';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
    CatalogModule,
    CartModule,
    AdminModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
  ],

  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
