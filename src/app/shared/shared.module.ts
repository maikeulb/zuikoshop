import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { CustomFormsModule } from 'ng2-validation';

import { MaterialModule } from './material/material.module';

import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CartOrderDetailsComponent } from './cart-order-details/cart-order-details.component';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CatalogItemComponent,
    CartOrderDetailsComponent,
    CommonModule,
  ],
  declarations: [
    CatalogItemComponent,
    CartOrderDetailsComponent,
  ]
})
export class SharedModule { }
