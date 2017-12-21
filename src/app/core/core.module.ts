import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule} from 'shared/shared.module';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard} from './services/auth-guard.service';
import { AdminAuthGuard} from './services/admin-auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService} from './services/user.service';
import { CategoryService} from './services/category.service';
import { ProductService} from './services/product.service';
import { ShoppingCartService} from './services/shopping-cart.service';

export const COMPONENTS = [
  PageNotFoundComponent,
  NavbarComponent,
  HomeComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    AngularFireDatabase,
  ]
})
export class CoreModule { }
