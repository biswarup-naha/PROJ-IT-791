import React, { useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

const loadingSteps = [
  'Parsing raw routing data...',
  'Converting to structured JSON...',
  'Validating protocols and interfaces...',
  'Sending to FastAPI backend...',
  'Almost there...'
];

interface LoaderOverlayProps {
  onComplete: () => void;
}

const LoaderOverlay: React.FC<LoaderOverlayProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev + 1 >= loadingSteps.length) {
          clearInterval(interval);
          onComplete();
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <Hourglass visible={true} height="80" width="80" colors={['#306cce', '#72a1ed']} />
      <p className="text-white mt-6 text-xl animate-pulse">{loadingSteps[step]}</p>
    </div>
  );
};

export default LoaderOverlay;
