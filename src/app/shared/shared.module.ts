import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { CustomFormsModule } from 'ng2-validation';

import { MaterialModule } from './material/material.module';

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
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }
