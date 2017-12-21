import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartRoutingModule, routedComponents } from './cart-routing.module';

import { CartRowComponent } from './cart-content-row/cart-row.component';
import { CheckoutFormComponent } from './cart-checkout/checkout-form.component';

import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  declarations: [
    routedComponents,
    CartRowComponent,
    ErrorComponent,
    FieldComponent,
    CheckoutFormComponent
  ]
})
export class CartModule { }
