import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { CatalogModule } from './catalog/catalog.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    MaterialModule,
    CatalogModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],

  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
