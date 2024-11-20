import { CounterState, CounterAction, CounterActionTypes } from '../types/counter.types';

/**
 * Counter Reducer
 * 
 * This reducer manages the state for a counter with the following features:
 * - Increment/Decrement counter
 * - Reset counter
 * - Set specific value
 * - Maintains operation history
 * 
 * @param state - Current state of the counter
 * @param action - Action to be performed on the state
 * @returns New state after applying the action
 */
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        lastOperation: 'Incremented',
        history: [...state.history, state.count + 1]
      };

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        lastOperation: 'Decremented',
        history: [...state.history, state.count - 1]
      };

    case CounterActionTypes.RESET:
      return {
        ...state,
        count: 0,
        lastOperation: 'Reset',
        history: [...state.history, 0]
      };

    case CounterActionTypes.SET_VALUE:
      return {
        ...state,
        count: action.payload ?? 0,
        lastOperation: `Set to ${action.payload}`,
        history: [...state.history, action.payload ?? 0]
      };

    default:
      return state;
  }
};
