import { Product } from 'shared/models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-row',
  template:  `

    <div class="cart-row">

      <mat-grid-list cols="7" rowHeight="100px">
        <mat-grid-tile><img width="70px" 
          [src]="product.imageUrl">
        </mat-grid-tile>
        <mat-grid-tile>
          {{product.category}}
        </mat-grid-tile>
        <mat-grid-tile>
          {{product.price | currency:'USD':true }}
        </mat-grid-tile>
      </mat-grid-list>

    </div>
  
  `

})
export class CartRowComponent implements OnInit {

  @Input() product:Product;
  
  constructor() { }

  ngOnInit() {
  }


}
