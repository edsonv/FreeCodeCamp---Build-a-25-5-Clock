import { useAppContext } from '../../../application/context/useAppContext.hook';
import { formatTime } from '../../formatTime';
import styles from './Clock.module.scss';

export const Clock = () => {
  const { state } = useAppContext();

  return (
    <div className={styles.show}>
      <div id='timer-label' className={styles.label}>
        {state.isSession ? 'Session' : 'Break'}
      </div>
      <div id='time-left' className={styles.countdown}>
        {formatTime(state.timeLeft)}
      </div>
    </div>
  );
};
