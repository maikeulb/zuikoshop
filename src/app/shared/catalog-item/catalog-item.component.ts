import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';

import { ShoppingCartService } from '../../core/services/shopping-cart.service';

@Component({
  selector: 'catalog-item',
  template: `
    <mat-card *ngIf="product.model">
      <mat-card-header></mat-card-header>
      <img mat-card-image
      *ngIf="product.imageUrl"
      [src]="product.imageUrl"
      alt="{{ product.model }}">

      <mat-card-content>
        <a  (click)="catalogItemDetails.emit(product)">
        {{product.model}}
        </a>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button
        (click)="addToCart.emit(book)" >
        <i class="material-icons">add_shopping_cart</i>
        </button>
        <button mat-button
        (click)="bookDetails.emit(book)" >
        <i class="material-icons">search</i>
        </button>
      </mat-card-actions>
    </mat-card>
    `,
  styles: [
    `
    mat-card {
      width: 240px;
      height: 260px;
      margin: 15px;
    }

    @media only screen and (max-width: 768px) {
      mat-card {
        margin: 15px 0 !important;
      }
    }

    mat-card:hover {
      box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);
    }
    mat-card-title {
      margin-right: 10px;
    }
    mat-card-title-group {
      margin: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor:pointer;
    }
    img {
      width: 170px;
      min-width: 60px;
      height: 174px;
    }
    mat-card-content {
      margin-top: 15px;
      margin: 0px 0 0;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    mat-card-footer {
      padding: 0 5px 5px;
    }
    mat-card-actions{
        margin-top:10px;
    }

  `
  ]
})
export class CatalogItemComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
