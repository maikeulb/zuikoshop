import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/models/product';
import { ShoppingCart } from '../../shared/models/shopping-cart';

import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-catalog-list',
  template: `
    <div class="row">

      <div class="col-3">
        <catalog-item-filter
        [category]="category">
        </catalog-item-filter>
      </div>

      <div class="catalog-list-container">
        <div *ngIf="cart$ | async as cart" class="catalog-list">
          <ng-container *ngFor="let p of filteredProducts; let i = index">
            <catalog-item
              [product]="p"
              [shopping-cart]="cart">
            </catalog-item>
          </ng-container>
        </div>
      </div>

      <mat-progress-spinner
        *ngIf="loading$ | async"
        color="primary"
        mode="indeterminate"
        value="50">
      </mat-progress-spinner>

    </div>

  `,
  styles: [
  `
    .catalog-list-container {
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
export class CatalogListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public shoppingCartService: ShoppingCartService
  ) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() { 
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();      
      });
  }

  private applyFilter() { 
    this.filteredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
  }

}
