import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      text-align: center;
      margin-left: 10%;
      margin-right: 10%;
    }
  `
  ],


})
export class CartComponent {}
