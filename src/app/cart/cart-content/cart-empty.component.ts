import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-empty',
    template: `
    <div class="empty-cart">
      Your  <i class="material-icons mat-48 cart">shopping_cart</i> is empty
    </div>  
  `
})
export class CartEmptyComponent {}
