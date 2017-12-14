import 'hammerjs'; // wrap in module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';

import { PageNotFoundComponent } from './containers/page-not-found.component';
import { NavbarComponent } from './components/navbar.component';

export const COMPONENTS = [
  PageNotFoundComponent,
  NavbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class CoreModule { }
