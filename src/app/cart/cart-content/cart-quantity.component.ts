import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'core/services/shopping-cart.service';
import { Product } from 'shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  template: `

    <div class="row no-gutters">
      <div class="col-2">
        <button 
          (click)="removeFromCart()"
          class="btn btn-secondary btn-block">-</button> 
      </div>
      <div class="col text-center quantity">
        {{ shoppingCart.getQuantity(product) }} in cart
      </div>
      <div class="col-2">
        <button 
          (click)="addToCart()"
          class="btn btn-secondary btn-block">+</button> 
      </div>
    </div>
  `

})
export class CartQuantityComponent  {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
