import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    HomeModule,
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
