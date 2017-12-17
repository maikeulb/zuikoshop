import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>page not found</p>
  `,

  styles: [
    `
    :host {
      text-align: center;
    }
  `,

  ],
})
export class PageNotFoundComponent {}
