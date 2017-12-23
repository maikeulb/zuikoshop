import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard} from 'core/services/auth-guard.service';
import { CartOrderDetailsComponent } from 'shared/cart-order-details/cart-order-details.component';

import { CartComponent } from './cart.component';
import { CartContentComponent } from './cart-content/cart-content.component';

import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CartCheckoutCompleteComponent } from './cart-checkout/cart-checkout-complete.component';

import { CartMyOrdersComponent } from './cart-my-orders/cart-my-orders.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: '',
        component: CartContentComponent },
      { path: 'checkout',
        component: CartCheckoutComponent,
        canActivate: [AuthGuard] },
      { path: 'checkout-complete/:id',
        component: CartCheckoutCompleteComponent,
        canActivate: [AuthGuard] },
      { path: 'checkout-details/:id',
        component: CartOrderDetailsComponent,
        canActivate: [AuthGuard] },
      { path: 'myorders',
        component: CartMyOrdersComponent,
        canActivate: [AuthGuard] },
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
  CartCheckoutComponent,
  CartCheckoutCompleteComponent,
  CartMyOrdersComponent,
];
