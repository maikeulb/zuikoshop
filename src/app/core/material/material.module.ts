import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
