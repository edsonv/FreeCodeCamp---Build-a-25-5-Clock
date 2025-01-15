import { ActionType } from '../../../domain/entities/action';
import { TimeControl } from '../TimeControl/TimeControl';
import styles from './Controls.module.scss';
import { useAppContext } from '../../../application/context/useAppContext.hook';

export const Controls = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div className={styles.controls}>
      <TimeControl
        label='Break length'
        onClickIncrement={() => dispatch({ type: ActionType.breakIncrement })}
        onClickDecrement={() => dispatch({ type: ActionType.breakDecrement })}
        disabled={state.isRunning}
        value={state.breakLength}
        onChange={({ target }) =>
          dispatch({ type: ActionType.setBreakLength, payload: target.value })
        }
      />
      <TimeControl
        label='Session length'
        onClickIncrement={() => dispatch({ type: ActionType.sessionIncrement })}
        onClickDecrement={() => dispatch({ type: ActionType.sessionDecrement })}
        disabled={state.isRunning}
        value={state.sessionLength}
        onChange={({ target }) =>
          dispatch({
            type: ActionType.setSessionLength,
            payload: target.value,
          })
        }
      />
    </div>
  );
};
