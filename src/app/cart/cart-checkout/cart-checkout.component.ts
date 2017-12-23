import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'core/services/shopping-cart.service';

@Component({
  selector: 'app-cart-checkout',
  template: `

    <h3>Checkout</h3>

    <div *ngIf="cart$ | async as cart">

      <div fxLayout="column"
         fxLayoutGap.gt-sm="10%"
         fxLayout.gt-sm="row"
         fxFlex="100%"
         fxFlexOffset.gt-sm="15%"
         fxFlex.gt-sm="70%">

        <div fxFlex="100%">
          <app-cart-checkout-form
            [cart]="cart">
          </app-cart-checkout-form>
        </div>

        <div fxFlex="100%">
          <app-cart-checkout-summary
            [cart]="cart">
          </app-cart-checkout-summary>
        </div>

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
