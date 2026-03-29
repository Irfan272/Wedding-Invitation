import { useState, useEffect } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

export default function AudioPlayer({ audioUrl, isPlaying, onToggle }) {
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(false);

  const extractVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = audioUrl ? extractVideoID(audioUrl) : null;

  const onReady = (event) => {
    setPlayer(event.target);
    if (isPlaying && event.target && typeof event.target.playVideo === 'function') {
      try {
        event.target.playVideo();
      } catch (e) {
        console.error("Failed to play on ready", e);
      }
    }
  };

  useEffect(() => {
    if (player && typeof player.playVideo === 'function') {
      try {
        if (isPlaying) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      } catch(e) {
        console.error("Failed to toggle play state", e);
      }
    }
  }, [isPlaying, player]);

  const opts = {
    height: '10',
    width: '10',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: videoId || '',
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  if (error || !videoId) return null;

  return (
    <>
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
        <YouTube 
          videoId={videoId} 
          opts={opts} 
          onReady={onReady} 
          onError={(e) => {
            console.error("YouTube Player Error", e);
            setError(true);
          }}
          onEnd={(e) => { 
            if (e.target && typeof e.target.playVideo === 'function') {
              e.target.playVideo();
            }
          }} 
        />
      </div>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-40 bg-gold p-4 rounded-full text-white shadow-xl shadow-gold/30 hover:scale-110 active:scale-95 transition-all outline-none border border-yellow-300 flex items-center justify-center h-12 w-12"
      >
        {isPlaying ? <FaMusic className="text-xl animate-pulse" /> : <FaPause className="text-xl" />}
      </motion.button>
    </>
  );
}
