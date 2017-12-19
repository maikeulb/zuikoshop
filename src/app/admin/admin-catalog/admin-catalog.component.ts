import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material'; 

import { Subscription } from 'rxjs/Subscription';

import { Product } from '../models/product';

import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'admin-catalog',
  template: `
    <p>
      <a routerLink="/admin/catalog/new">Add New Catalog Item</a>
    </p>

    <div class="example-container mat-elevation-z1">
    <div class="example-header">
      <mat-form-field>
        <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
      </mat-form-field>
    </div>

    <mat-table #table [dataSource]="dataSource" matSort>

     (reload)="reloadItems()">
      <ng-container matColumnDef="model">
        <mat-header-cell *matHeaderCellDef mat-sort-header> Model </mat-header-cell>
        <mat-cell *matCellDef="let product"> {{product.model}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="price">
        <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>
        <mat-cell *matCellDef="let product"> {{product.price | currency: 'USD':true }} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="$key">
        <mat-header-cell *matHeaderCellDef></mat-header-cell>
        <mat-cell *matCellDef="let product">
          <a [routerLink]="['/admin/catalog/', product.$key]">Edit</a>
        </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  </div>
  <mat-paginator #paginator
                 [pageSize]="10"
                 [pageSizeOptions]="[5, 10, 15]">
  </mat-paginator>
  `,
  styles: [
  `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}

.mat-table {
  overflow: auto;
  max-height: 500px;
}

.mat-header-cell.mat-sort-header-sorted {
  color: black;
}

.mat-column-model,
.mat-column-price {
  display: flex;
  justify-content: center;
  text-align: center;
}
  `]

})
export class AdminCatalogComponent {
  products: Product[];
  subscription: Subscription;
  dataSource: MatTableDataSource<Product>;
  items: Product[] = [];
  itemCount: number;

  displayedColumns = ['model', 'price', '$key'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
