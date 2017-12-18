import { Component } from '@angular/core';

import { Item } from './../models/item';

@Component({
  selector: 'app-catalog-item',
  template: `
    <mat-card class="matCard2 mat-elevation-z0">
      <img mat-card-image alt="Photo of a Item">
      <mat-card-content>
        <a>Olympus OM1</a>
        <p>$19.991</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button > <i class="material-icons">add_shopping_cart</i></button>
      </mat-card-actions>
    </mat-card>
    `,
  styles: [
  `
    mat-card {
      width: 240px;
      height: 260px;
      margin: 15px 0;
    }
    mat-card:hover {
	    border:1px solid lightgrey;
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
    mat-card-actions{
        margin-top:10px;
    }
  `]
})
export class CatalogItemComponent {}
