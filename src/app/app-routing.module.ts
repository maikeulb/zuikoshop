import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'catalog', loadChildren: 'app/catalog/catalog.module#CatalogModule'},
  { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
