import { Component } from '@angular/core';
import { Item } from './../models/item';

@Component({
  selector: 'app-catalog-item',
  template: `
    <mat-card>
      <mat-card-header></mat-card-header>
      <mat-card-content>
        <p>
        title
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button > <i class="material-icons">add_shopping_cart</i></button>
        <button mat-button > <i class="material-icons">search</i></button>
      </mat-card-actions>
    </mat-card>
    `,
})
export class CatalogItemComponent {}
