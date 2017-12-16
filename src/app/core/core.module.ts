import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

export const COMPONENTS = [
  PageNotFoundComponent,
  NavbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class CoreModule { }
