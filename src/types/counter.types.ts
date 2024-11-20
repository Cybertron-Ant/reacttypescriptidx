// Define the state interface for our counter
export interface CounterState {
  count: number;
  lastOperation: string;
  history: number[];
}

// Define all possible action types
export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  SET_VALUE = 'SET_VALUE'
}

// Define the structure for our actions
export interface CounterAction {
  type: CounterActionTypes;
  payload?: number;
}

// Initial state for the counter
export const initialState: CounterState = {
  count: 0,
  lastOperation: 'Initial state',
  history: []
};
