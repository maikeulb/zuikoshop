import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { PageNotFoundComponent } from './core/containers/page-not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'catalog', loadChildren: 'app/catalog/catalog.module#CatalogModule'},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
