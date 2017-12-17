import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../core/services/auth-guard.service';

import { CartComponent } from './cart.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      { path: 'content', component: CartContentComponent },
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
      { path: 'checkout-success/:id', component: CheckoutCompleteComponent, canActivate: [AuthGuard] },
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
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
  MyOrdersComponent,
];
