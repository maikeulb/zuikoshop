import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';

import { CartRoutingModule, routedComponents } from './cart-routing.module';

import { CartRowComponent } from './cart-content/cart-row.component';
import { CartEmptyComponent } from './cart-content/cart-empty.component';

import { CartCheckoutFormComponent } from './cart-checkout/cart-checkout-form.component';
import { CartCheckoutSummaryComponent } from './cart-checkout/cart-checkout-summary.component';

// import { CartCheckoutCompleteComponent } from './components/order-success/order-success.component';
// import { CartMyOrdersComponent } from './components/my-orders/my-orders.component';


@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  declarations: [
    routedComponents,
    CartRowComponent,
    CartEmptyComponent,
    CartCheckoutFormComponent,
    // CartCheckoutCompleteComponent,
    // CartMyOrdersComponent,
    CartCheckoutSummaryComponent,
  ]
})
export class CartModule { }
