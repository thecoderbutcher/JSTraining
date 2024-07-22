'use client'
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import useAudioStore from '@/app/components/player/store/useStore'

interface CardPlayButtonProps {
    id:string | null
}

const CardPlayButton = ({id}: CardPlayButtonProps) => {
    const {playing, setPlaying, currentPlaylist, setCurrentPlaylist} = useAudioStore()
    
    const playingPlaylist = playing && currentPlaylist.playlist?.id === id;

    const handlePlayPause =() => { 
        fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist} = data;
            setPlaying(true);
            setCurrentPlaylist({id:id, songs, playlist, song:songs[0]})
        })
        setPlaying(!playing);
    }

    return (
        <button onClick={handlePlayPause} className="flex items-center justify-center rounded-full bg-green-500 w-8 h-8 text-xl">
            {playingPlaylist ? <IoPauseSharp/> : <IoPlay/>}
        </button>
    )
}

export default CardPlayButton