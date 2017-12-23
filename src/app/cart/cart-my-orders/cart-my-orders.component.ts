import { AuthService } from 'core/services/auth.service';
import { OrderService } from 'core/services/order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  template:`
  
  <h1>Orders</h1>
  <table class="table">
    <thead>
      <tr>
        <th>Customer</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead> 
    <tbody>
      <tr *ngFor="let order of orders$ | async">
        <td>{{ order.shipping.name }}</td>
        <td>{{ order.datePlaced | date}}</td>
        <td>
          <a href="#">View</a>
        </td>
      </tr>
    </tbody> 
  </table>
  `
})
export class CartMyOrdersComponent {
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
