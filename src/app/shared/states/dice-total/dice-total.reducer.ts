import { createReducer, on } from "@ngrx/store";
import { d100, d12, d20, d4, d6, d8, reset } from "./dice-total.actions";

export interface DiceTotalState {
  total: number
  lastRoll: number | null
}

export const initialDiceTotalState: DiceTotalState = {
  total: 0,
  lastRoll: null
}

export const diceTotalReducer = createReducer(
  initialDiceTotalState,
  on(d100, state => {
    const newRandomNumber =  Math.floor(Math.random() * 100) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(d20, state => {
    const newRandomNumber =  Math.floor(Math.random() * 20) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(d12, state => {
    const newRandomNumber =  Math.floor(Math.random() * 12) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(d8, state => {
    const newRandomNumber =  Math.floor(Math.random() * 8) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(d6, state => {
    const newRandomNumber =  Math.floor(Math.random() * 6) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(d4, state => {
    const newRandomNumber =  Math.floor(Math.random() * 4) + 1;
    return {
      ...state,
      total: state.total + newRandomNumber,
      lastRoll: newRandomNumber
    };
  }),
  on(reset, state => {
    return {
      ...state,
      total: 0,
      lastRoll: null
    };
  }),

)
