import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar style="background:#FFFFFF;">

      <button mat-button routerLink="/">
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
          <div *ngIf="auth.user$ | async as user; else anonymousUser">
            <button mat-button (click)="logout()">Logout</button>
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
      <div *ngIf="auth.user$ | async as user; else anonymousUser">
        <button mat-menu-item (click)="logout()">Logout</button>
      </div>
      <ng-template #anonymousUser>
        <button mat-menu-item (click)="login()">Login with Google</button>
      </ng-template>
    </mat-menu>

  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class NavbarComponent {

  constructor(private auth: AuthService) {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
