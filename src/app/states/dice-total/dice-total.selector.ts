import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectDiceTotalState = (state: AppState) => state.total

export const selectDiceTotal = createSelector(
  selectDiceTotalState,
  (state) => state.total
)
