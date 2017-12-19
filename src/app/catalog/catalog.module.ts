import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule, routedComponents } from './catalog-routing.module';

import { AddToCartComponent } from './catalog-item-details/add-to-cart.component';
import { CatalogItemNavigatorComponent } from './catalog-item-details/catalog-item-navigator.component';
import { CatalogItemFilterComponent } from './catalog-item-filter/catalog-item-filter.component';

@NgModule({
  imports: [
    SharedModule,
    CatalogRoutingModule,
  ],
  declarations: [
    routedComponents,
    AddToCartComponent,
    CatalogItemNavigatorComponent,
    CatalogItemFilterComponent,
  ]
})
export class CatalogModule { }
