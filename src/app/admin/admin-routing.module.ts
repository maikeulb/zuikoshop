import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "../core/services/auth-guard.service";
import { AdminAuthGuard } from '../core/services/admin-auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminCatalogComponent } from './admin-catalog/admin-catalog.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { CatalogItemFormComponent } from './catalog-item-form/catalog-item-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'catalog/new',
        component: CatalogItemFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { path: 'catalog/:id',
        component: CatalogItemFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { path: 'catalog',
        component: AdminCatalogComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { path: 'orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
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
