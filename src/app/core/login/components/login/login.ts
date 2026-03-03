import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { userLoginAction } from '../../../../states/user/user.actions';
import { AppState } from '../../../../states/app.state';
import { Router, ActivatedRoute } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
  imports: [], // no NgIf, we use @if
})
export class Login implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private store: Store<AppState>, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    const w = window as any;
    if (!w.google || !w.google.accounts?.id) {
      console.error('Google Identity script not loaded');
      return;
    }

    // Defer slightly to ensure the template has rendered the div
    setTimeout(() => {
      w.google.accounts.id.initialize({
        client_id: '203322211896-8bbq21gi19tfpfjbkd0fpbq9kd3ct1be.apps.googleusercontent.com',
        callback: (response: any) => this.handleLogin(response),
      });

      const btn = document.getElementById('google-btn');
      if (!btn) {
        console.error('google-btn div not found');
        return;
      }

      w.google.accounts.id.renderButton(btn, {
        theme: 'outline',
        size: 'large',
      });
    });
  }

  handleLogin(response: any) {
    console.log(response);
    if (response.clientId) {
      this.store.dispatch(userLoginAction({ clientId: response.clientId, credential: response.credential }))
      this.router.navigate(['/dashboard'])
    }
  }

}
