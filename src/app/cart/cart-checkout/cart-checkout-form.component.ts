import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Order } from "shared/models/order";
import { ShoppingCart } from 'shared/models/shopping-cart';

import { OrderService } from 'core/services/order.service';
import { AuthService } from 'core/services/auth.service';

@Component({
  selector: 'app-cart-checkout-form',
  template: `

    <form #f="ngForm">
      <div class="form-group">
        <label for="">Name</label>
        <input #name="ngModel" name="name" [(ngModel)]="shipping.name" type="text" class="form-control" required>
        <div class="alert alert-danger" *ngIf="name.touched && name.invalid">
          <div *ngIf="name.errors.required">Name is required.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="">Address</label>
        <input #addressLine1="ngModel" name="addressLine1" [(ngModel)]="shipping.addressLine1" type="text" class="form-control" placeholder="Line 1" required>
        <div class="alert alert-danger" *ngIf="addressLine1.touched && addressLine1.invalid">
          <div *ngIf="addressLine1.errors.required">Address Line 1 is required.</div>
        </div>
      </div>
      <div class="form-group">
        <label for=""></label>
        <input #addressLine2="ngModel" name="addressLine2" [(ngModel)]="shipping.addressLine2" type="text" class="form-control" placeholder="Line 2" required>
        <div class="alert alert-danger" *ngIf="addressLine2.touched && addressLine2.invalid">
          <div *ngIf="addressLine2.errors.required">Address Line 2 is required.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="">City</label>
        <input #city="ngModel" name="city" [(ngModel)]="shipping.city" type="text" class="form-control" required>
        <div class="alert alert-danger" *ngIf="city.touched && city.invalid">
          <div *ngIf="city.errors.required">City is required.</div>
        </div>
      </div>
      <button 
        [disabled]="!f.valid"
        (click)="placeOrder()"
        class="btn btn-primary">Place Order</button>
    </form>    
  
  `
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
