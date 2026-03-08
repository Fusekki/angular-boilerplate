import { createReducer, on } from "@ngrx/store";
import { userLoginAction, reset } from "./user.actions";

export interface UserState {
  clientId: string | null;
  credential: string | null;
}

export const initialUserState: UserState = {
  clientId: null,
  credential: null
}

export const userReducer = createReducer(
  initialUserState,
  on(userLoginAction, (state, { clientId, credential }) => ({
    ...state,
    clientId,
    credential,
  })),
  on(reset, state => {
    return {
      ...state,
      clientId: null,
      credential: null,
    }
  })
)
