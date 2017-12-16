import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
        <app-login>login</app-login>
      </div>

      <button mat-button [mat-menu-trigger-for]="menu" fxHide="false" fxHide.gt-sm>
        <mat-icon>menu</mat-icon>
      </button>

    </mat-toolbar>

    <mat-menu x-position="before" #menu="matMenu" [overlapTrigger]="false">
      <button mat-menu-item routerLink="/catalog">Shop</button>
      <button mat-menu-item routerLink="/cart">Checkout</button>
      <app-login>login</app-login>
    </mat-menu>

  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class NavbarComponent {

  routeLinks: any[];
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Catalog', link: '/catalog/list' },
      { label: 'Cart', link: '/cart/content' }];
  }
}
