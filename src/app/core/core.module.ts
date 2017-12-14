import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu.component';
import { MaterialModule } from './material/material.module';

export const COMPONENTS = [
  MenuComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
