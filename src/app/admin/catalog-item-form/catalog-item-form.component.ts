import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/take';

import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';

import { FormControl, Validators} from '@angular/forms'; //move

@Component({
  selector: 'app-catalog-item-form',
  template: `
    <div
    fxLayout="column"
    fxLayoutGap.gt-sm="10%"
    fxLayout.gt-sm="row"
    fxFlexOffset.gt-sm="15%"
    fxFlex.gt-sm="70%"
    >
    <div fxFlex="100%">
    <form #f="ngForm" (ngSubmit)="save(f.value)" class="catalogItemForm-container">

      <mat-form-field>
        <input matInput #model="ngModel" [(ngModel)]="product.model"
          name="model" placeholder="Model"
          required
          >
        <mat-error>Please input camera model</mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput #price="ngModel" [(ngModel)]="product.price"
          name="price" placeholder="Amount" type="number" class="example-right-align"
          required [min]=0
          >
        <span matPrefix>$&nbsp;</span>
        <span matSuffix>.00</span>
        <mat-error *ngIf="price.errors?.min">Price must be greater than $0.</mat-error>
        <mat-error *ngIf="price.errors?.required">Please enter price.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <mat-select #category="ngModel" [(ngModel)]="product.category" name="category"
          placeholder="Category"
          required
          >
          <mat-option *ngFor="let c of categories$ | async" [value]="c.$key">{{ c.name }}</mat-option>
        </mat-select>
        <mat-error>Please select category.</mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput #imageUrl="ngModel" [(ngModel)]="product.imageUrl"
          name="imageUrl" placeholder="Image Url"
          required url
          >
        <mat-error *ngIf="imageUrl.errors?.url">Please enter a valid URL.</mat-error>
        <mat-error *ngIf="imageUrl.errors?.required">Please enter image URL.</mat-error>
      </mat-form-field>
      <div>
        <button mat-button >Save</button>
        <button mat-button type="button" (click)="delete()">Delete</button>
      </div>
    </form>
    </div>

    <div fxFlex="100%">
      <mat-card *ngIf="product.model" class="product-card">
        <mat-card-header>
        <div mat-card-avatar class="product-header-image"></div>
        <mat-card-title>{{ model.value }}</mat-card-title>
        <mat-card-subtitle>Short Description</mat-card-subtitle>
      </mat-card-header>
    <img mat-card-image [src]="product.imageUrl" alt="{{ product.model}}">
      <mat-card-content>
      <p>{{ price.value | currency:'USD':true }}</p>
      </mat-card-content>
    </mat-card>
    </div>
    </div>

  `,

  styles: [ 
  `
    .catalogItemForm-container {
      display: flex;
      flex-direction: column;
    }
    .catalogItemForm-container > * {
      width: 100%;
    }
  `]

})
export class CatalogItemFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {
    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/catalog']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }
    this.productService.delete(this.id);
    this.router.navigate(['/admin/catalog']);
  }

  ngOnInit() {
  }
}
