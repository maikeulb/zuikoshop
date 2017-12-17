import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [
    routedComponents,
  ]
})
export class AdminModule { }

// routed feature module
//
// declartions
// no providers
// no exports
// imported by nobody if lazy
