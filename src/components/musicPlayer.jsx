import { useRef, useState } from "react";
import musicSrc from "../assets/music/music.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <audio ref={audioRef} autoPlay loop>
        <source src={musicSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-primary text-accent p-1 rounded-full shadow-lg hover:bg-primary hover:text-accent transition"
      >
        {isPlaying ? (
          <MdMusicNote className="text-2xl spin-slow" />
        ) : (
          <MdMusicOff className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
