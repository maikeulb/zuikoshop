import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-catalog-item-navigator',
  template: `

    <button [disabled]="!previous" (click)="onPrevious.emit()" md-button><i class="material-icons md-36">navigate_before</i>
      Previous
    </button>{{current }} / {{count}}

    <button [disabled]="!next" (click)="onNext.emit()" md-button> Next <i class="material-icons md-36">
      navigate_next</i>
    </button>

  `
})
export class CatalogItemNavigatorComponent {}
