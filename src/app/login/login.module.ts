import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class LoginModule { }
