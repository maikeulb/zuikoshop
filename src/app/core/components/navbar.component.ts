import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav mat-tab-nav-bar>
     <a mat-tab-link *ngFor="let routeLink of routeLinks; let i = index"
      [routerLink]="routeLink.link" [active]="activeLinkIndex === i"
      (click)="activeLinkIndex = i">
      {{routeLink.label}}
    </a>
  </nav>
`
})
export class NavbarComponent {

  routeLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'Home', link: '/home' },
      { label: 'Catalog', link: '/catalog/list' }];
  }
}
