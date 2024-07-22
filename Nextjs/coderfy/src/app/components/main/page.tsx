import { playlists } from "@/lib/data";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import PlayListItemCard from "./components/PlayListItemCard";

const Content = () => {
    return (
        <main className="bg-zinc-900 basis-9/12 rounded-md overflow-y-auto">
            <div className="relative transition-all duration-1000 bg-green-600 px-6 py-4">
                <Header/>
                <Greetings name="The coder butcher"/>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
                <div className="flex flex-wrap mt-6 gap-4">
                    {
                        playlists.map((playlist, index) => <PlayListItemCard key={index} playlist={playlist} />)
                    } 
                </div>
            </div>
        </main>
    )
}

export default Content;