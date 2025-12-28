import { createReducer, on } from "@ngrx/store"
import { decrement, divide, increment, multiply, reset } from "./counter.actions"

export interface CounterState {
  count: number
}

export const initialCounterState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
  on(multiply, state => ({ ...state, count: state.count * 10 })),
  on(divide, state => ({ ...state, count: state.count / 10 })),
  on(reset, state => ({ ...state, count: 0 }))
)
