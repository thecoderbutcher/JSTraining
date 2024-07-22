import Greetings from "@/app/components/main/components/Greetings";
import Header from "@/app/components/main/components/Header";
import { allPlaylists, playlists, songs } from "@/lib/data";
import Top from "./components/Top";

interface PlaylistProps {
    id: string
}

const Playlist = ({params}:{params: PlaylistProps}) => {
    const playlist = allPlaylists.find(playlist => playlist.id === params.id)
    const playListSongs = songs.find(song => song.albumId === playlist?.albumId)
    const artistsSong = playlist?.artists.join(', ') || '';
    const headerStyle = ''
    return (
        <main className="bg-zinc-900 basis-9/12 rounded-md overflow-y-auto transition-all duration-100">
            <div className="relative flex flex-col h-full overflow-hidden bg-zinc-900 px-6 py-4">
                <Header/>
                <Top 
                    srcImg={playlist?.cover || ""}
                    name={playlist?.title}
                    artists={artistsSong}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
                <div className="flex flex-wrap mt-6 gap-4">
                    {}
                </div>
            </div>
        </main>
    )
};

export default Playlist;
