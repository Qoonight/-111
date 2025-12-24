import React, { useState, useEffect, useRef } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';
import { AppState } from './types';

// Utility for smooth number interpolation (simple raf loop)
const useSmoothValue = (target: number, speed: number = 0.05) => {
  const [value, setValue] = useState(target);
  const rafRef = useRef<number>();

  useEffect(() => {
    const loop = () => {
      setValue((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.001) return target;
        return prev + diff * speed;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, speed]);

  return value;
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CHAOS);
  
  // 0.0 = Chaos, 1.0 = Formed
  const targetProgress = appState === AppState.FORMED ? 1.0 : 0.0;
  
  // Custom hook to lerp the progress value for the Scene
  const progress = useSmoothValue(targetProgress, 0.03);

  return (
    <div className="w-screen h-screen relative bg-black overflow-hidden font-sans">
      <Scene appState={appState} progress={progress} />
      <Overlay appState={appState} setAppState={setAppState} />
    </div>
  );
};

export default App;
