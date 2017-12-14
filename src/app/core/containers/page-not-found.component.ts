import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<p>it works</p>
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
