
import React, { useState, useEffect, useCallback } from 'react';

const EnterFullscreenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 2h-2v3h-3v2h5v-5zm-3-4V5h3v5h-2V7h-3z"/>
  </svg>
);

const ExitFullscreenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm3-8V5h-2v5h5V8h-3z"/>
  </svg>
);

export const FullscreenButton: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const updateFullscreenState = useCallback(() => {
    setIsFullscreen(!!(document.fullscreenElement || 
                     (document as any).mozFullScreenElement || 
                     (document as any).webkitFullscreenElement ||
                     (document as any).msFullscreenElement));
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', updateFullscreenState);
    document.addEventListener('mozfullscreenchange', updateFullscreenState);
    document.addEventListener('webkitfullscreenchange', updateFullscreenState);
    document.addEventListener('msfullscreenchange', updateFullscreenState);

    updateFullscreenState(); // Initial check

    return () => {
      document.removeEventListener('fullscreenchange', updateFullscreenState);
      document.removeEventListener('mozfullscreenchange', updateFullscreenState);
      document.removeEventListener('webkitfullscreenchange', updateFullscreenState);
      document.removeEventListener('msfullscreenchange', updateFullscreenState);
    };
  }, [updateFullscreenState]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).mozRequestFullScreen) { /* Firefox */
        (element as any).mozRequestFullScreen();
      } else if ((element as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).msRequestFullscreen) { /* IE/Edge */
        (element as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) { /* Firefox */
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari and Opera */
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { /* IE/Edge */
        (document as any).msExitFullscreen();
      }
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="fixed top-2 right-2 z-50 p-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      {isFullscreen 
        ? <ExitFullscreenIcon className="w-5 h-5" /> 
        : <EnterFullscreenIcon className="w-5 h-5" />}
    </button>
  );
};
