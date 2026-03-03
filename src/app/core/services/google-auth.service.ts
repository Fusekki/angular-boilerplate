import { Injectable } from '@angular/core';

declare const google: any;

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
  private clientId = 'YOUR_GOOGLE_CLIENT_ID';

  initButton(elementId: string, callback: (credential: string) => void) {
    const g = (window as any).google;
    if (!g || !g.accounts || !g.accounts.id) {
      console.error('Google Identity script not loaded');
      return;
    }

    g.accounts.id.initialize({
      client_id: this.clientId,
      callback: (response: any) => {
        callback(response.credential);
      },
    });

    g.accounts.id.renderButton(
      document.getElementById(elementId),
      {
        type: 'standard',
        size: 'large',
        theme: 'outline',
        text: 'signin_with',
      }
    );
  }
}
