import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule, routedComponents } from './catalog-routing.module';

import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    CatalogListComponent,
  ]
})
export class CatalogModule { }

// routed feature module
//
// declartions
// no providers
// no exports
// imported by nobody if lazy
