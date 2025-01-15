import { RefObject } from 'react';
import { ActionType } from '../../../domain/entities/action';
import styles from './ClockControls.module.scss';
import { useAppContext } from '../../../application/context/useAppContext.hook';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

export const ClockControls = ({ audioRef }: Props) => {
  const { dispatch } = useAppContext();

  return (
    <div className={styles.clockControls}>
      <button
        id='start_stop'
        type='button'
        onClick={() => dispatch({ type: ActionType.startPauseSession })}
        className={styles.button}
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
        className={styles.button}
      >
        Reset
      </button>
    </div>
  );
};
