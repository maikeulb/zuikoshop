import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-catalog-item-form',
  template: `
    <div fxFlexOffset.gt-sm="15%" fxFlex.gt-sm="70%">

    <form #f="ngForm" (ngSubmit)="save(f.value)" class="catalogItemForm-container">

      <mat-form-field>
        <input matInput #model="ngModel" [(ngModel)]="product.model" name="model" placeholder="Model">
      </mat-form-field>

      <mat-form-field>
        <input matInput #price="ngModel" [(ngModel)]="product.price" name="price"
          placeholder="Amount" type="number" class="example-right-align"
         >
          <span matPrefix>$&nbsp;</span>
          <span matSuffix>.00</span>
      </mat-form-field>

      <mat-form-field>
        <mat-select #category="ngModel" [(ngModel)]="product.category" name="category" placeholder="Category">
          <mat-option *ngFor="let c of categories$ | async" [value]="c.$key">{{ c.name }}</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
        <input #imageUrl="ngModel" [(ngModel)]=product.imageUrl name="imageUrl" matInput placeholder="Image Url">
      </mat-form-field>
      <div>
        <button mat-button >Save</button>
      </div>
    </form>
    </div>

  `,
  styles: [ `

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
    private categoryService: CategoryService,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
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
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
