import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'list', component: CatalogListComponent },
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
  CatalogListComponent
];
