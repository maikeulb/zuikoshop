import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { CatalogItemFormComponent } from './catalog-item-form/catalog-item-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  declarations: [
    routedComponents,
    CatalogItemFormComponent,
  ]
})
export class AdminModule { }

// routed feature module
//
// declartions
// no providers
// no exports
// imported by nobody if lazy
