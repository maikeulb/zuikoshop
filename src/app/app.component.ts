import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 20px;
    }
    `]
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {

    auth.user$.subscribe(user => {
      if (!user) {
        return;
      }

      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
        return;
      }
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
