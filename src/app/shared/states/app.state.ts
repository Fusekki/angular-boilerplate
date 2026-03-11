import { DiceTotalState } from "./dice-total/dice-total.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
  total: DiceTotalState
  user: UserState
};
