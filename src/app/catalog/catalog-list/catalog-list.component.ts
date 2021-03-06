import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';

import { ShoppingCartService } from 'core/services/shopping-cart.service';
import { ProductService} from 'core/services/product.service';

@Component({
  selector: 'app-catalog-list',
  template: `

    <mat-sidenav-container class="sidenav-container">

      <mat-sidenav #sidenav class="example-container" [mode]="navMode" opened="true">

        <app-catalog-item-filter
          [category]="category">
        </app-catalog-item-filter>

      </mat-sidenav>

        <mat-sidenav-content
          style="background:#FFFFFF;"
          *ngIf="cart$ | async as cart" >

          <div class="side-btn" *ngIf="!sidenav.opened">
            <button mat-button
              (click)="sidenav.open()">
              Filter
            </button>
          </div>

          <div fxLayout="row wrap" fxLayoutAlign="space-around start" fxLayoutAlign.gt-sm="start start" >
            <ng-container *ngFor="let p of filteredProducts; let i = index">
              <catalog-item
                [product]="p"
                [shopping-cart]="cart">
              </catalog-item>
            </ng-container>
          </div>

        </mat-sidenav-content>

    </mat-sidenav-container>

  `,
  styles: [`

.sidenav-container .mat-drawer-content {
  margin-left: 170px !important;

}

@media (max-width: 768px) {

    .sidenav-container .mat-drawer-content {
      margin-left: 0 !important;
    }

}

    .sidenav-container {
      margin-left: 5%;
      margin-right: 5%;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
     .sidenav-container {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
    .side-btn{
        margin: 1em;
        text-align: center;
    }


  `],
})
export class CatalogListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<any>;

  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public shoppingCartService: ShoppingCartService
  ) {

  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 769) {
      this.navMode = 'over';
            this.sidenav.close();
        }
        if (event.target.innerWidth > 769) {
      this.navMode = 'side';
           this.sidenav.open();
        }
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
