export enum ActionType {
  breakIncrement = 'BREAK_INCREMENT',
  breakDecrement = 'BREAK_DECREMENT',
  setBreakLength = 'SET_BREAK_LENGTH',
  sessionIncrement = 'SESSION_INCREMENT',
  sessionDecrement = 'SESSION_DECREMENT',
  setSessionLength = 'SET_SESSION_LENGTH',
  reset = 'RESET',
  startPauseSession = 'START_PAUSE_SESSION',
  updateCountdown = 'UPDATE_COUNTDOWN',
  setTimeLeft = 'SET_TIME_LEFT',
  setIsSession = 'SET_IS_SESSION',
}

export type Action =
  | { type: ActionType.breakIncrement }
  | { type: ActionType.breakDecrement }
  | { type: ActionType.setBreakLength; payload: string }
  | { type: ActionType.sessionIncrement }
  | { type: ActionType.sessionDecrement }
  | { type: ActionType.setSessionLength; payload: string }
  | { type: ActionType.reset }
  | { type: ActionType.startPauseSession }
  | { type: ActionType.updateCountdown }
  | { type: ActionType.setTimeLeft; payload: number }
  | { type: ActionType.setIsSession };
