import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CatalogRoutingModule, routedComponents } from './catalog-routing.module';
import { CatalogItemComponent } from './catalog-list/catalog-item.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule
  ],
  declarations: [
    routedComponents,
    CatalogItemComponent,
  ]
})
export class CatalogModule { }

// routed feature module
//
// declartions
// no providers
// no exports
// imported by nobody if lazy
