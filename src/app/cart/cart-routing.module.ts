import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      { path: 'content', component: CartContentComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'complete', component: CheckoutCompleteComponent },
      { path: '', redirectTo: 'content', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

export const routedComponents = [
  CartComponent,
  CartContentComponent,
  CheckoutComponent,
  CheckoutCompleteComponent,
];
