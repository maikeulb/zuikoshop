import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartRow } from '../models/cart-row';

@Component({
  selector: 'app-cart-row',
  template:  `

    <div class="cart-row">

      <mat-grid-list cols="6" rowHeight="100px">

        <mat-grid-tile>
          <img width="70px" [src]="product.imageUrl">
        </mat-grid-tile>

        <mat-grid-tile>
          <a mat-button (click)="clicked.emit()" routerLink="/cart/">
            {{ product.model }}
          </a>
        </mat-grid-tile>

        <mat-grid-tile>
          {{product.price | currency:'USD':true }}
        </mat-grid-tile>

        <mat-grid-tile>
          <mat-form-field>
            <input matInput type="number">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile>
          {{product.quantity * product.price | currency:'USD':true }}
        </mat-grid-tile>

        <mat-grid-tile class="remove-item">
          <a>
            <i style="cursor: pointer;" class="material-icons">close</i>
          </a>
        </mat-grid-tile>

      </mat-grid-list>

    </div>
  `,

  styles: [`
    .remove-item > ::ng-deep figure {
      justify-content: flex-end!important;
      padding-right: 58px;
    }

`]

})
export class CartRowComponent implements OnInit {

  @Input() product: CartRow;

  constructor() { }

  ngOnInit() {
  }
}
