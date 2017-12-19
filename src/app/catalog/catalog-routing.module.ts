import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogItemDetailsComponent } from './catalog-item-details/catalog-item-details.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      { path: '', 
        component: CatalogListComponent },
      { path: 'item/:id', 
        component: CatalogItemDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }

export const routedComponents = [
  CatalogComponent,
  CatalogListComponent,
  CatalogItemDetailsComponent
];
