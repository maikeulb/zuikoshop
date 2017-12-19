import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'catalog-item-filter',
  template:
`
<div class="sticky-top">
  <div class="list-group">
      <a
        class="list-group-item list-group-item-action"
        [class.active]="!category"
        routerLink="/"
        >All Categories</a>
      <a 
        *ngFor="let c of categories$ | async" 
        routerLink="/"
        [queryParams]="{ category: c.$key }"
        class="list-group-item list-group-item-action"
        [class.active]="category === c.$key"
        >
        {{ c.name }}
      </a>
    </div>
</div>

`
})
export class CatalogItemFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
