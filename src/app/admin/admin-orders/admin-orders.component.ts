import { Order } from 'shared/models/order';
import { OrderService } from 'core/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  template: `

    <h1>Orders</h1>

<ng-container *ngIf="order$ | async as orders">
  <ng-container *ngIf="orders.length > 0; else noOrder">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let order of orders">
          <td>{{order.user.username}}</td>
          <td>{{order.datePlaced | date}}</td>
          <td><a [routerLink]="['/order-details', order.$key]">View</a></td>
        </tr>
      </tbody>
    </table>
  </ng-container>
  <ng-template #noOrder>No Order so far.</ng-template>
</ng-container>

  `
})
export class AdminOrdersComponent {
  orders$;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }
}
