import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'list', component: CatalogListComponent },
      { path: 'item/:id', component: ItemDetailsComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
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
  ItemDetailsComponent
];
