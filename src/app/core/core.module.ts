import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { AuthGuard} from './services/auth-guard.service';
import { UserService} from './services/user.service';

export const COMPONENTS = [
  PageNotFoundComponent,
  NavbarComponent,
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AngularFireDatabase,
  ]
})
export class CoreModule { }
