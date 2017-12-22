import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'core/services/shopping-cart.service';


@Component({
  selector: 'app-cart-checkout',
  template: `

    <h2>Shipping</h2>
    <div class="row" *ngIf="cart$ | async as cart">
      <div class="col-6">
        <app-cart-checkout-form 
          [cart]="cart">
        </app-cart-checkout-form>
      </div>
      <div class="col-6">
        <app-cart-checkout-summary 
          [cart]="cart">
        </app-cart-checkout-summary>
      </div>
    </div>
  `
})
export class CartCheckoutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
