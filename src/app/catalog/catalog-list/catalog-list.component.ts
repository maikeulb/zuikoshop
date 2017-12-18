import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './../models/item';

import { ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-catalog-list',
  template: `
    <div class="catalog-container">
      <div class="catalog-list">
       </div>
    </div>
    <p>it works</p>
  `,
    styles: [
        `
        .catalog-container {
            margin-left : 10%;
            margin-right: 10%;
            text-align: center;
        }
        .catalog-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
        }
        `
    ],
})
export class CatalogListComponent {}
