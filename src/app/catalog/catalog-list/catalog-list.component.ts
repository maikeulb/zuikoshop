import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/models/product';
import { ShoppingCart } from '../../shared/models/shopping-cart';

import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-catalog-list',
  template: `

    <mat-sidenav-container
      class="sidenav-container" (backdropClick)="close()">

      <mat-sidenav #sidenav [mode]="navMode" opened="false" (keydown.escape)="close()" disableClose>
        <catalog-item-filter
          [category]="category">
        </catalog-item-filter>
      </mat-sidenav>

      <mat-sidenav-content
        style="background:#FFFFFF;"
        class="example-sidenav-content" *ngIf="cart$ | async as cart" class="catalog-list">
        <div class="side-btn" *ngIf="!sidenav.opened">

          <p>
            <button mat-button
              (click)="sidenav.open()">
              Filter
            </button>
          </p>

        </div>
        <div class="flex-row">
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

.side-btn{
    margin: 1em;
    text-align: center;
}

.example-container {
  position: absolute;
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
}

.example-sidenav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  background: rgba(255, 0, 0, 0.5);
}

.flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

  `
  ],
})
export class CatalogListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<any>;

  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  close() {
    this.sidenav.close();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 769) {
            this.sidenav.close();
            this.navMode = 'side';
        }
        if (event.target.innerWidth > 769) {
           this.sidenav.open();
           this.navMode = 'side';
        }
    }


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
