import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-cart-checkout-summary',
  template:`
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Order Summary</h4>
        <p class="card-text">You have {{ cart.totalItemsCount }} items in your shopping cart.</p>
        <ul class="list-group list-group-flush">
          <li *ngFor="let item of cart.items" class="list-group-item">
            {{ item.quantity }} x {{ item.title }}
            <div class="float-right">
              {{ item.totalPrice | currency:'USD':true }}
            </div>
          </li>
          <li class="list-group-item font-weight-bold">
            Total 
            <div class="float-right">
              {{ cart.totalPrice | currency:'USD':true }}
            </div>
          </li>
        </ul>
      </div>
    </div>
      `
})
export class CartCheckoutSummaryComponent  {
  @Input('cart') cart: ShoppingCart;
}