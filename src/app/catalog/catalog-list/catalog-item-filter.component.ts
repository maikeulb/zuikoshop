import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-catalog-item-filter',
  template: `

    <mat-list>
      <mat-list-item [class.active]="!category">
        <a class="sidenav-link" routerLink="/catalog" [class.active]="!category">
          All Categories
        </a>
      </mat-list-item>
      <mat-list-item *ngFor="let c of categories$ | async" [class.active]="category == c.$key">
        <a class="sidenav-link" routerLink="/catalog" [class.active]="category == c.$key" [queryParams]="{ category: c.$key }">
          {{ c.name }}
        </a>
      </mat-list-item>
    </mat-list>

    `,
  styles: [`

    .mat-list {
        margin-right: 1.5em;
    }
    .mat-list-item {
        border: 1px solid #CCC;
        border-bottom: 0;
    }
    .mat-list-item:nth-last-child(1){
        border-bottom: 1px solid #ccc;
    }
    .mat-list-item:hover {
        background: #fafafa;
    }
    .mat-list-item.active {
        background: #fafafa;
    }
    .sidenav-link {
        width: 100%;
        height: 100%;
        padding-top: 25px;
        color: #333;
        text-decoration: none;
    }
    .sidenav-link:hover{
        color: #1e88e5;
    }
    .sidenav-link.active {
        color: #1e88e5;
    }

`]

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
