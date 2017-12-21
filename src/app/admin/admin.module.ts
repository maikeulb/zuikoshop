import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    CdkTableModule,
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
