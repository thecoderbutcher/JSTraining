'use client'
import { useEffect, useRef, useState } from "react" 
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import useAudioStore from "../store/useStore";

const AudioPlayer: React.FC = () => { 
    const audioRef = useRef<HTMLAudioElement>(null);
    const { audio, setAudio, playing, setPlaying, currentTime, setCurrentTime } = useAudioStore();
    
    useEffect(() => {
        if(!audioRef.current) return; 
        
        audioRef.current.src = '/music/1/04.mp3';

        setAudio(audioRef.current)
        audioRef.current.currentTime = currentTime;
        
        if(playing) audioRef.current.play()
    
    },[audioRef, setAudio, playing, currentTime, setCurrentTime])
    
    const handlePlayPause = () => {
        if(!audioRef.current) return;
        
        if(!playing){
            audioRef.current.src = '/music/1/03.mp3'; 
            audioRef.current?.play()
            audioRef.current.currentTime = currentTime;
        } 
        
        audioRef.current?.pause() 
        setCurrentTime(audioRef.current.currentTime)
        setPlaying(!playing)
    }

    return (
        <div className="grid place-content-center gap-4 flex-1">
            <div className="flex justify-center">
                <button className="text-3xl rounded-full p2 transition-all duration-500" onClick={handlePlayPause}>
                    {playing ?  <IoPauseSharp/>: <IoPlaySharp/>}
                </button>
                <audio ref={audioRef} /> 
            </div>
        </div>
    )
}

export default AudioPlayer