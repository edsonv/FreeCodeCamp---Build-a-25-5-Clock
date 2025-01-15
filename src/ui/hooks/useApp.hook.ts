import { Dispatch, useEffect, useReducer } from 'react';
import { initialState } from '../../application/state/initialState';
import { reducer } from '../../application/state/reducer';
import { Action, ActionType } from '../../domain/entities/action';
import { State } from '../../domain/entities/state';

export const useApp = (): [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let countdownInterval = null;

    if (state.isRunning && state.timeLeft !== 0) {
      countdownInterval = setInterval(() => {
        dispatch({ type: ActionType.updateCountdown });
      }, 1000);
    } else if (state.isRunning && state.timeLeft >= 0 && state.isSession) {
      dispatch({ type: ActionType.setIsSession });
      dispatch({
        type: ActionType.setTimeLeft,
        payload: state.breakLength * 60,
      });
    } else if (state.isRunning && !state.isSession) {
      dispatch({ type: ActionType.setIsSession });
      dispatch({
        type: ActionType.setTimeLeft,
        payload: state.sessionLength * 60,
      });
    }

    return () => {
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [
    state.breakLength,
    state.isRunning,
    state.isSession,
    state.sessionLength,
    state.timeLeft,
  ]);

  return [state, dispatch];
};
