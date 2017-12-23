import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';

import { ShoppingCartService } from 'core/services/shopping-cart.service';

@Component({
  selector: 'catalog-item',
  template: `
    <mat-card *ngIf="product.model">

      <img mat-card-image
        *ngIf="product.imageUrl"
        [src]="product.imageUrl"
        alt="{{ product.model }}">

      <mat-card-content>
        <a  (click)="catalogItemDetails.emit(product)"></a>
        <h2>{{ product.model}}</h2>
        <p>{{ product.price | currency:'USD':true }}</p>
      </mat-card-content>

      <mat-card-actions>
        <div *ngIf="showActions && shoppingCart">
          <button mat-button
            (click)="addToCart()" >
            <i class="material-icons">add_shopping_cart</i>
          </button>
          <button mat-button
            (click)="goToDetails()" >
            <i class="material-icons">info</i>
          </button>
        </div>
      </mat-card-actions>

    </mat-card>
    `,

  styles: [
    `
    mat-card {
      width: 240px;
      margin: 10px;
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
      width: 150px;
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

  constructor(
    private cartService: ShoppingCartService,
    private router: Router) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  goToDetails() {
     this.router.navigate(['/catalog/item/', this.product.$key]);
  }

}
