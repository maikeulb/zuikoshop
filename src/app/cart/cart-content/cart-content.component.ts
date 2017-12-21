import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-content',
  template: `

    <div *ngIf="cart$ | async as cart">
      <h3>
        Your cart
      </h3>
      <div>
        You have {{ cart.totalItemsCount }} items in your shopping cart.
      </div>
      <app-cart-row *ngFor="let item of cart.items" 
        [product]="item">
      </app-cart-row>
      <div class="footer">
        <div style="display:inline-block"> Total : {{cart.totalPrice | currency:'USD':true}}</div>
        <button mat-button routerLink="/cart/order" color="primary">
          Checkout
        </button>
      </div>
    </div>

  `,
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
