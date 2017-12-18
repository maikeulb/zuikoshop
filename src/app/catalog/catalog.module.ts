import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule, routedComponents } from './catalog-routing.module';

import { AddToCartComponent } from './item-details/add-to-cart.component';
import { CatalogItemComponent } from './catalog-list/catalog-item.component';
import { ItemNavigatorComponent } from './item-details/item-navigator.component';

@NgModule({
  imports: [
    SharedModule,
    CatalogRoutingModule,
  ],
  declarations: [
    routedComponents,
    AddToCartComponent,
    CatalogItemComponent,
    ItemNavigatorComponent,
  ]
})
export class CatalogModule { }
