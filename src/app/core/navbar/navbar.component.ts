import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar style="background:#FFFFFF;">
      <button mat-button routerLink="/">
        <mat-icon>home</mat-icon>
      </button>
      <button mat-button routerLink="/shop">Shop</button>
      <span class="fill-remaining-space"></span>
      <button mat-button routerLink="/products"><mat-icon>shopping_cart</mat-icon></button>

      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu" yPosition="below" [overlapTrigger]="false">
        <button mat-menu-item>
          <span>Login</span>
        </button>
        <button mat-menu-item>
          <span>Register</span>
        </button>
      </mat-menu>

    </mat-toolbar>
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
