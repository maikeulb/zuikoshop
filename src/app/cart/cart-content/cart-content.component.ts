import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-content',
  template: `

    <div *ngIf="cart$ | async as cart" class="cart-content">
      <h3>
        Shopping Cart
      </h3>
      <div>
        You have {{ cart.totalItemsCount }} items in your shopping cart.
      </div>
      <app-cart-row *ngFor="let item of cart.items"
        [product]="item">
      </app-cart-row>
      <div class="footer">
        <div style="display:inline-block">
          Total : {{cart.totalPrice | currency:'USD':true}}
        </div>
        <button mat-raised-button routerLink="/cart/order" color="primary">
          Checkout
        </button>
      </div>
    </div>

  `,
  styles: [`

    .cart-content{
      margin-left: 10% ;
      margin-right: 10% ;
    }

    @media only screen and (max-width: 768px) {
     .cart-content {
        margin-left: 15px;
        margin-right: 15px;
      }
    }

    .footer {
      display: block;
      right: 200px;
      position: absolute;
    }

    .footer > button {
      display:inline-block;
      margin-right: 20px;
    }

    .footer > div {
      display:inline-block;
      margin-right: 10px;
      font-weight: bold;
      font-size: 18px;
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
