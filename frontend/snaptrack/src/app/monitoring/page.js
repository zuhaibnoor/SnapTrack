"use client";
import styles from './monitoring.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Monitoring() {
  const imgRef = useRef(null);
  const [error, setError] = useState(false);


  const handleFullscreen = () => {
    if (imgRef.current) {
      imgRef.current.requestFullscreen();
    }
  };
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Live Footage</h1>

      {/* Stream from Flask backend */}
      {error ? (
        <p className={styles.error}>🚫 Stream not available</p>
      ) : (
        <>
        <img
          ref={imgRef}
          src="http://127.0.0.1:5000/video_feed"
          alt="CCTV Stream"
          className={styles.frame}
          onClick={handleFullscreen}
          onError={() => setError(true)} 
        />
        <p>Click on the video to view in fullscreen mode.</p>
        </>
      )}
      
    </div>
    </>
  );
}