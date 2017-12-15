import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
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
