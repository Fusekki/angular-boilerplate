import { createAction, props } from "@ngrx/store";

export const userLoginAction = createAction('[Login component] user',
  props<{ clientId: string, credential: string }>()
);

export const reset = createAction('[Header component] user');
