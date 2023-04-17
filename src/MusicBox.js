import React, { useState, useRef } from 'react';
import './MusicBox.css';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='main-music-div'>
      <p>18</p>
      <p>E-Bach</p>
      <audio ref={audioRef} src="18.mp3" />
      <button onClick={handlePlayPause} className="play-button">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default MusicPlayer;