import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './../models/item';
import { ItemNav } from './../models/item-nav';

@Component({
    selector: 'app-item-details',
    template: `
      <div class="item-details" >
        <app-item-navigator></app-item-navigator>
        <table> 
          <td width="50%">
          </td>
          <td width="50%">
            <h1>item.title</h1>
            <p> By item.author </p>
            <div class="price">item.price</div>
            <button class="add-cart" mat-raised-button color="primary">
              ADD TO CART <i class="material-icons">add_shopping_cart</i>
            </button>
          </td>
        </table>
      </div>
    `,
})
export class ItemDetailsComponent {}
