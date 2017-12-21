import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AppUser } from 'shared/models/app-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar style="background:#FFFFFF;">

      <button mat-button routerLink="/home">
        <mat-icon>home</mat-icon>
      </button>
      <div fxLayout="row" fxShow="false" fxShow.gt-sm>
        <button mat-button routerLink="/catalog">Shop</button>
      </div>

      <span class="fill-remaining-space"></span>
      <h1>Zuiko Shop</h1>
      <span class="fill-remaining-space"></span>

      <div fxLayout="row" fxShow="false" fxShow.gt-sm>
        <button mat-button routerLink="/cart"><mat-icon>shopping_cart</mat-icon></button>
          <div *ngIf="appUser; else anonymousUser">
            <button mat-button [matMenuTriggerFor]="menu">
              {{ appUser.name }}
            </button>
            <mat-menu #menu = "matMenu" [overlapTrigger]="false">
              <ng-container *ngIf="appUser.isAdmin">
                <button mat-menu-item routerLink="/admin/orders">Manage Orders</button>
                <button mat-menu-item routerLink="/admin/catalog">Manage Catalog</button>
              </ng-container>
              <button mat-menu-item (click)="logout()">Logout</button>
            </mat-menu>
          </div>
          <ng-template #anonymousUser>
            <button mat-button (click)="login()">Login with Google</button>
          </ng-template>
      </div>

      <button mat-button [mat-menu-trigger-for]="menu" fxHide="false" fxHide.gt-sm>
        <mat-icon>menu</mat-icon>
      </button>

    </mat-toolbar>

    <mat-menu x-position="before" #menu="matMenu" [overlapTrigger]="false">
      <button mat-menu-item routerLink="/catalog">Shop</button>
      <button mat-menu-item routerLink="/cart">Checkout</button>
      <div *ngIf="appUser; else menuAnonymousUser">
        <ng-container *ngIf="appUser.isAdmin">
          <button mat-menu-item routerLink="/admin/orders">Manage Orders</button>
          <button mat-menu-item routerLink="/admin/catalog">Manage Catalog</button>
        </ng-container>
        <button mat-menu-item (click)="logout()">Logout</button>
      </div>
      <ng-template #menuAnonymousUser>
        <button mat-menu-item (click)="login()">Login with Google</button>
      </ng-template>
    </mat-menu>

  `,
  styles: [
  `
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `
  ]
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth: AuthService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
