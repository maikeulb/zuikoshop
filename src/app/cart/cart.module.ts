import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CartRoutingModule, routedComponents } from './cart-routing.module';

import { CartRowComponent } from './cart-content/cart-row.component';
import { CartEmptyComponent } from './cart-content/cart-empty.component';
import { CheckoutFormComponent } from './checkout/checkout-form.component';
import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  declarations: [
    routedComponents,
    CartRowComponent,
    ErrorComponent,
    FieldComponent,
    CartEmptyComponent,
    CheckoutFormComponent
  ]
})
export class CartModule { }
