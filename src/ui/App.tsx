import { useEffect, useRef } from 'react';
import alarm from './assets/mixkit-classic-alarm-995.wav';
import { Clock } from './components/Clock/Clock';
import { Controls } from './components/Controls/Controls';
import { MainLayout } from './layouts/Main';
import { ClockControls } from './components/ClockControl/ClockControls';
import { useAppContext } from '../application/context/useAppContext.hook';

function App() {
  const { state } = useAppContext();
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
    <MainLayout>
      <Controls />
      <Clock />
      <ClockControls audioRef={audioRef} />
      <audio src={alarm} id='beep' ref={audioRef}></audio>
    </MainLayout>
  );
}

export default App;
