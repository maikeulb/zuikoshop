import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <mat-card class="example-card">
      <img mat-card-image style="max-width:100%;" [src]="backgroundImage">
      <mat-card-content>
        <h3 class="mat-subheading-1">Your Vision, Our Future | <a href=''>
          Yoshihisa Maitani</a>
        </h3>
      </mat-card-content>
    </mat-card>
  `
})
export class HomeComponent {
  backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/zuikoshop.appspot.com/o/6017263852_e51eafd7ae_b.jpg?alt=media&token=49a769cf-b923-4dac-8adb-0ab30e5fbd03'
}
