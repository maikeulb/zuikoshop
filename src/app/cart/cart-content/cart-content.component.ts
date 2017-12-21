import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-content',
  template: `
<h1>Shopping Cart</h1>
<div class="card" *ngIf="cart$ | async as cart" style="width: 80%;">
  <div class="card-body">
    <p>
      You have {{ cart.totalItemsCount }} items in your shopping cart.
      <button *ngIf="cart.items.length" (click)="clearCart()" class="float-right btn btn-light btn-sm">Clear Shopping Cart</button>

    </p>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th class="text-center" style="width: 230px">Quantity</th>
        <th class="text-right" style="width: 200px">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of cart.items">
        <td>
          <div [style.backgroundImage]="'url(' + item.imageUrl + ')'" class="thumbnail">
          </div>
        </td>
        <td>
          {{ item.model}}
        </td>
        <td class="text-right">
          {{ item.totalPrice | currency:'USD':true }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th class="text-right">{{ cart.totalPrice | currency:'USD':true }}</th>
      </tr>
      <tr>
        <th colspan="4">
          <a *ngIf="cart.items.length" routerLink="/cart/checkout" class="btn btn-primary">Check Out</a>
        </th>
      </tr>
    </tfoot>
  </table>
</div>

  `,

styles: [`

.thumbnail { 
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-size: cover;
}


`]
})
export class CartContentComponent implements OnInit {
  cart$;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  clearCart() { 
    this.shoppingCartService.clearCart();
  }
}
