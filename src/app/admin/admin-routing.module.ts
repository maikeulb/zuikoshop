import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "../core/services/auth-guard.service";
import { AdminAuthGuard } from '../core/services/admin-auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminCatalogComponent } from './admin-catalog/admin-catalog.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'catalog', 
        component: AdminCatalogComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      { path: 'orders', 
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdminCatalogComponent,
  AdminOrdersComponent
];
