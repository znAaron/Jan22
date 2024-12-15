import React, { useState, useEffect } from 'react';

// Define a simple Music Icon component
const MusicIcon = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/christmas-dreams-jingle-bells-268299.mp3')); // Set path to your music file

  const handleMusicToggle = () => {
    if (isPlaying) {
      // Stop the music and stop rotation
      audio.pause();
      setIsPlaying(false);
    } else {
      // Start the music and rotation
      audio.play().catch((error) => {
        // Handle error if audio cannot be played (e.g., due to iOS restrictions)
        console.error("Audio play error:", error);
      });
      setIsPlaying(true);
    }
  };

  // Auto-stop the music when the component is unmounted
  useEffect(() => {
    return () => {
      audio.pause(); // Stop music when the component is unmounted
    };
  }, [audio]);

  return (
    <div
      onClick={handleMusicToggle}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#38824c', // Background color
        padding: '15px',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Floating shadow effect
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        transform: isPlaying ? 'rotate(360deg)' : 'rotate(0deg)', // Rotation effect when playing
        zIndex: 9999, // Ensure it's above other content
      }}
    >
      <i
        className={`fas fa-music ${isPlaying ? 'fa-spin' : ''}`} // Font Awesome music icon with rotation class
        style={{
          fontSize: '24px',
          color: 'white',
        }}
      ></i>
    </div>
  );
};

export default MusicIcon;
