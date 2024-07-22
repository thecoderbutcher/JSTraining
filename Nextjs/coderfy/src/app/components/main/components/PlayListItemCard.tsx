
import type { Playlist } from "@/lib/data";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import CardPlayButton from "./CardPlayButton";

interface CardProps {
    playlist: Playlist,

}
const PlayListItemCard = ({playlist}:CardProps) => {
    const {id, cover, title, artists, color } = playlist;
    const artistsString = artists.join(", ");

    return (
        <article className="group relative">
            <div className="absolute right-4 bottom-16 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                <CardPlayButton id={id}/>
            </div>
            <Link 
                href={`/playlist/${id}`}
                className="flex flex-col relative p-2 overflow-hidden gap-2 rounded-md hover:bg:zinc-500 transition-all duration-300 shadow-lg hover:shadow-xl bg-zinc-500/30 w-44"
            >
                <Image 
                    src={cover}
                    alt={`Cover of ${title} by ${artists}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-auto rounded-md aspect-square"
                />
                <div className="flex flex-col px-2 items-center">
                    <h4 className="text-sm text-white">{title}</h4>
                    <span className="text-gray-400 text-xs text-nowrap text-ellipsis">{artistsString}</span>
                </div>
            </Link>
        </article>
    );
};

export default PlayListItemCard;
