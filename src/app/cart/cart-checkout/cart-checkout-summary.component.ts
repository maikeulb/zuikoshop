import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-cart-checkout-summary',
  template: `
    <mat-card>
      <mat-card-content>

        <h4>Order Summary</h4>
        <p>You have {{ cart.totalItemsCount }} items in your shopping cart.</p>

        <div *ngFor="let item of cart.items">
          <mat-grid-list cols="2" rowHeight="100px">
            <mat-grid-tile>
              {{ item.quantity }} x {{ item.model}}
            </mat-grid-tile>
            <mat-grid-tile class="total-price">
              {{ item.totalPrice | currency:'USD':true }}
            </mat-grid-tile>
          </mat-grid-list>
        </div>
        <div fxLayout="row" fxLayoutAlign="flex-end" style="padding-right: 20px;">
         <p>
           <strong>Total</strong>  {{ cart.totalPrice | currency:'USD':true }}
         </p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .total-price > ::ng-deep figure {
      justify-content: flex-end!important;
      padding-right: 20px;
    }
  `]

})
export class CartCheckoutSummaryComponent  {
  @Input('cart') cart: ShoppingCart;
}
