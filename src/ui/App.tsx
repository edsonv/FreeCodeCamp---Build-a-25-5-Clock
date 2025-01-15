import { ActionType } from '../domain/entities/action';
import { MinusIcon } from './components/Icons/minusIcon';
import { PlusIcon } from './components/Icons/plusIcon';
import { EditableInput } from './components/EditableInput/EditableInput';
import { formatTime } from './formatTime';
import { useApp } from './useApp.hook';
import alarm from './assets/mixkit-classic-alarm-995.wav';
import { useEffect, useRef } from 'react';

function App() {
  const [state, dispatch] = useApp();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let count = 5;

    if (state.timeLeft === 0) {
      while (count !== 0) {
        audioRef.current?.play();
        --count;
      }
    }
  }, [state.timeLeft]);

  return (
    <main>
      <div>
        <div id='break-label'>Break length</div>
        <button
          id='break-increment'
          type='button'
          onClick={() => dispatch({ type: ActionType.breakIncrement })}
          disabled={state.isRunning}
        >
          <PlusIcon />
        </button>
        <EditableInput
          id='break-length'
          value={state.breakLength}
          onChange={({ target }) =>
            dispatch({ type: ActionType.setBreakLength, payload: target.value })
          }
        />

        <button
          id='break-decrement'
          type='button'
          onClick={() => dispatch({ type: ActionType.breakDecrement })}
          disabled={state.isRunning}
        >
          <MinusIcon />
        </button>
      </div>
      <div>
        <div id='session-label'>Session length</div>
        <button
          id='session-increment'
          type='button'
          onClick={() => dispatch({ type: ActionType.sessionIncrement })}
          disabled={state.isRunning}
        >
          <PlusIcon />
        </button>
        <EditableInput
          id='session-length'
          value={state.sessionLength}
          onChange={({ target }) =>
            dispatch({
              type: ActionType.setSessionLength,
              payload: target.value,
            })
          }
        />
        <button
          id='session-decrement'
          type='button'
          onClick={() => dispatch({ type: ActionType.sessionDecrement })}
          disabled={state.isRunning}
        >
          <MinusIcon />
        </button>
      </div>
      <div id='timer-label'>{state.isSession ? 'Session' : 'Break'}</div>
      <div id='time-left'>{formatTime(state.timeLeft)}</div>
      <button
        id='start_stop'
        type='button'
        onClick={() => dispatch({ type: ActionType.startPauseSession })}
      >
        Start/Stop
      </button>
      <button
        id='reset'
        type='button'
        onClick={() => {
          audioRef.current?.pause();
          audioRef.current!.currentTime = 0;
          dispatch({ type: ActionType.reset });
        }}
      >
        Reset
      </button>
      <audio src={alarm} id='beep' ref={audioRef}></audio>
    </main>
  );
}

export default App;
