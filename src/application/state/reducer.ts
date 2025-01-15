import { Action, ActionType } from '../../domain/entities/action';
import { State } from '../../domain/entities/state';
import { initialState } from './initialState';


export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.breakIncrement:
      if (state.breakLength < 60)
        return { ...state, breakLength: state.breakLength + 1 };
      return state;

    case ActionType.breakDecrement:
      if (state.breakLength > 1)
        return { ...state, breakLength: state.breakLength - 1 };
      return state;

    case ActionType.setBreakLength:
      // TODO: validate non 0 input
      return { ...state, breakLength: +action.payload };

    case ActionType.sessionIncrement:
      if (state.sessionLength < 60)
        return {
          ...state,
          sessionLength: state.sessionLength + 1,
          timeLeft: (state.sessionLength + 1) * 60,
        };
      return state;

    case ActionType.sessionDecrement:
      if (state.sessionLength > 1)
        return {
          ...state,
          sessionLength: state.sessionLength - 1,
          timeLeft: (state.sessionLength - 1) * 60,
        };
      return state;

    case ActionType.setSessionLength:
      // TODO: validate non 0 input
      return { ...state, sessionLength: +action.payload };

    case ActionType.setTimeLeft:
      return { ...state, timeLeft: action.payload };

    case ActionType.reset:
      // TODO: stop the clock and reset to its default value
      return initialState;

    case ActionType.startPauseSession:
      return { ...state, isRunning: !state.isRunning };

    case ActionType.updateCountdown:
      return { ...state, timeLeft: state.timeLeft - 1 };

    case ActionType.setIsSession:
      return { ...state, isSession: !state.isSession };
    default:
      break;
  }

  throw new Error(`Unknown action: ${(action as Action).type}`);
};
