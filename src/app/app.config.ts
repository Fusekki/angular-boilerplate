import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { diceTotalReducer } from './states/dice-total/dice-total.reducer';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    // the name must match the name of the state variable
    provideState({ name: 'total', reducer: diceTotalReducer }),
    provideState({ name: 'lastRoll', reducer: diceTotalReducer }),
    provideClientHydration(withEventReplay())
]
};
