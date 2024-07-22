import { playlists } from '@/lib/data'
import type {Playlist} from '@/lib/data'
import {create} from 'zustand';

interface CurrentPlaylist {
    id: string| null,
    playlist: Playlist | null;
    song: string | null;
    songs: string[];
}

interface AudioState {
    audio: HTMLAudioElement | null,
    playing: boolean,
    currentTime: number,
    currentPlaylist: CurrentPlaylist,
    
    setAudio: (audioElement: HTMLAudioElement) => void;
    setPlaying: (playing: boolean) => void;
    setCurrentTime: (time: number) => void;
    setCurrentPlaylist: (playlist: CurrentPlaylist) => void;
}

const useAudioStore = create<AudioState>((set) => ({
    audio: null,
    playing: false,
    currentTime: 0,
    currentPlaylist: {id:null, playlist:null, song:null, songs:[]},

    setAudio: (audioElement) => set({ audio: audioElement }),
    setPlaying: (playing) => set({ playing }),
    setCurrentTime: (time) => set({ currentTime: time }),
    setCurrentPlaylist:(currentPlaylist) => set({currentPlaylist})
    
}));

export default useAudioStore;