import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule, routedComponents } from './catalog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    routedComponents,
  ]
})
export class CatalogModule { }

// routed feature module
//
// declartions
// no providers
// no exports
// imported by nobody if lazy
