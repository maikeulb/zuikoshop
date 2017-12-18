import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../core/services/product.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-catalog',
  template: `
  <p>
    <a routerLink="/admin/catalog/new">Add New Catalog Item</a>
  </p>
  <p>
    <input
      #query
      (keyup)="filter(query.value)"
      type="text" class="form-control" placeholder="Search...">
  </p>

  <div class="example-container mat-elevation-z1">
    <mat-table #table [dataSource]="dataSource">

      <ng-container matColumnDef="model">
        <mat-header-cell *matHeaderCellDef> Model </mat-header-cell>
        <mat-cell *matCellDef="let product"> {{product.model}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="price">
        <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>
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

  `,
})
export class AdminCatalogComponent implements OnInit {
  products: Product[];
  subscription: Subscription;
  dataSource: MatTableDataSource<Product>;
  items: Product[] = [];
  itemCount: number;

  displayedColumns = ['model', 'price', '$key'];

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
    this.dataSource = new MatTableDataSource(products);
    // this.dataSource.query({ offset: 0 })
      // .then(items => this.items = items);
    // this.dataSource.count()
      // .then(count => this.itemCount = count);
  }

  // reloadItems(params) {
    // if (!this.dataSource) return;

    // this.dataSource.query(params)
      // .then(items => this.items = items);    
  // }

  // filter(query: string) { 
  //   let filteredProducts = (query) ?
  //     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
  //     this.products;

    // this.initializeTable(filteredProducts);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
