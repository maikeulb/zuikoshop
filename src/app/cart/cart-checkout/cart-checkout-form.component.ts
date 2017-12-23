import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Order } from "shared/models/order";
import { ShoppingCart } from 'shared/models/shopping-cart';

import { OrderService } from 'core/services/order.service';
import { AuthService } from 'core/services/auth.service';

import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart-checkout-form',
  template: `

    <form #f="ngForm" class="checkoutForm-container">

      <mat-form-field>
        <input matInput #name="ngModel" [(ngModel)]="shipping.name"
          name="name" placeholder="Name" required>
          <mat-error>Please Address Line 1.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput #addressLine1="ngModel" [(ngModel)]="shipping.addressLine1"
          name="addressLine1" placeholder="Address Line 1" required>
          <mat-error>Please Address Line 1.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput #addressLine2="ngModel" [(ngModel)]="shipping.addressLine2"
          name="addressLine2" placeholder="Address Line 2" required>
          <mat-error>Please Address Line 2.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput #city="ngModel" [(ngModel)]="shipping.city"
          name="city" placeholder="City"  required>
          <mat-error>Please enter city.</mat-error>
      </mat-form-field>

      <button mat-raised-button
        color="primary"
        [disabled]="!f.valid"
        (click)="placeOrder()">
        Place Order
      </button>

    </form>

  `,
  styles: [`
    .checkoutForm-container {
      display: flex;
      flex-direction: column;
    }
    .checkoutForm-container > * {
      width: 100%;
    }
  `]

})
export class CartCheckoutFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {}; 
  userSubscription: Subscription;
  userId: string;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() { 
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/cart/checkout-complete', result.key]);
  }    
}
