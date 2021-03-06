import { AuthService } from '../core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div *ngIf="auth.user$ | async as user; else anonymousUser">
      <button mat-menu-item (click)="logout()">Logout</button>
    </div>
    <ng-template #anonymousUser>
      <button mat-menu-item (click)="login()">Login with Google</button>
    </ng-template>
  `
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
