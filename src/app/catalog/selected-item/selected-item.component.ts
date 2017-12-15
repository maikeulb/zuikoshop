import { Router } from '@angular/router';
import { ItemNav } from './../models/item-nav';
import { Item } from './../models/item';
import { Component } from '@angular/core';

@Component({
    selector: 'app-selected-item',
    template: `
    <div class="selected-item" >
      <p>it works</p> 
    </div>
    `,
})
export class SelectedItemComponent {}
