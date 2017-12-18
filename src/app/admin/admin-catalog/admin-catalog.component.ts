import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-admin-catalog',
  template: `
  <p>
    <a routerLink="/admin/catalog/new">Add New Catalog Item</a>
  </p>

  <table>
    <thead>
      <tr>
        <th> Model </th>
        <th> Price </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let p of products$ | async">
        <td> {{ p.model }} </td>
        <td> {{ p.price }} </td>
        <td>
          <a [routerLink]="['/admin/catalog/', p.$key]">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
  `,
})
export class AdminCatalogComponent implements OnInit {
  products$;

  constructor(private productService: ProductService) {
    this.products$=this.productService.getAll();
  }

  ngOnInit() {
  }


}
