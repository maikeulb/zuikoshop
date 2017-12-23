import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ProductService} from 'core/services/product.service';
import { ShoppingCartService } from 'core/services/shopping-cart.service';

@Component({
    selector: 'app-catalog-item-details',
    template: `

    <div class="selected-product" *ngIf="selectedProduct$ | async as product">
      <table *ngIf="product">
        <td width="50%">
          <img height="70%" [src]="product.imageUrl">
        </td>
        <td width="50%">
          <h1>{{product.model}}</h1>
          <div class="price">{{product.price | currency:'USD':true }}</div>
          <div [innerHtml]="product.description"></div>
          <button class="add-cart"
            (click)="addToCart(product)"
            md-raised-button color = "primary">
            ADD TO CART
            <i class="material-icons">add_shopping_cart</i>
          </button>
        </td>
      </table>
    </div>
    `,
    styles: [
        `
    :host{
        bottom:50px;
    }
    .detail {
        margin: 64px 32px;
        width: 50%;
        max-width: 400px;
        transition: opacity 0.4s;
        opacity: 0;
    }
    .block {
        display: inline-block;
    }
    app-reviews-container{
        margin-left: 15%;
        margin-right: 15%;
    }
    md-grid-list{
        display:block !important;
    }
    .selected-product{
        margin-left : 10%;
        margin-right: 10%;
        text-align: center;
    }
    td,th {
        vertical-align: middle !important;
    }
    .add-cart{
       margin-top:30px;
    }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogItemDetailsComponent implements OnInit {
  product: Product;
  productId: string;
  cart$: Promise<Observable<ShoppingCart>>;
  selectedProduct$: Observable<Product>;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    public shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.productId = params['id'];
        console.log(this.productId);
      });
    this.selectedProduct$ = this.productService.get(this.productId);
    this.cart$ = this.shoppingCartService.getCart();
  }

  addToCart(product) {
    this.shoppingCartService.addToCart(product);
  }
}
