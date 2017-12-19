import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { CustomFormsModule } from 'ng2-validation';

import { MaterialModule } from './material/material.module';

import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogItemQuantityComponent } from './catalog-item-quantity/catalog-item-quantity.component';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CommonModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    FlexLayoutModule,
    CommonModule,
    CatalogItemComponent,
    CatalogItemQuantityComponent,
  ],
  declarations: [
    CatalogItemComponent,
    CatalogItemQuantityComponent,
  ]
})
export class SharedModule { }
