import { Component } from '@angular/core';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-dashboard',
  imports: [Sidenav],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  userLogout() {
    console.log('logged out.');
  }
}
