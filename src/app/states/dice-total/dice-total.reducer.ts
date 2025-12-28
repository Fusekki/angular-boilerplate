import { createReducer, on } from "@ngrx/store";
import { d100, d12, d20, d4, d6, d8 } from "./dice-total.actions";

export interface DiceTotalState {
  total: number
}

export const initialDiceTotalState: DiceTotalState = {
  total: 0
}

export const diceTotalReducer = createReducer(
  initialDiceTotalState,
  on(d100, state => ({ ...state, total: state.total + Math.floor(Math.random() * 100) })),
  on(d20, state => ({ ...state, total: state.total +  Math.floor(Math.random() * 20) })),
  on(d12, state => ({ ...state, total: state.total +  Math.floor(Math.random() * 12) })),
  on(d8, state => ({ ...state, total: state.total +  Math.floor(Math.random() * 8) })),
  on(d6, state => ({ ...state, total: state.total +  Math.floor(Math.random() * 6) })),
  on(d4, state => ({ ...state, total: state.total +  Math.floor(Math.random() * 4) }))
)
