import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-card style>
      <img mat-card-image style=" height: auto; width: auto; max-height: 80vh; max-width:100%;" [src]="backgroundImage">
    </mat-card>
  `,
  styles: [`
   img {
   }
    `]
})
export class HomeComponent {

  // backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/zuikoshop.appspot.com/o/6017263852_e51eafd7ae_b.jpg?alt=media&token=49a769cf-b923-4dac-8adb-0ab30e5fbd03'
     backgroundImage='https://cdn.dribbble.com/users/419355/screenshots/3542725/olympus-om1-2.png'
}
