import type { Playlist } from "@/lib/data";
import Image from "next/image";
import { Link } from 'next-view-transitions'

interface CardProps {
    playlist: Playlist,

}
const AsideMenuCard = ({playlist}:CardProps) => {
    const {id, cover, title, artists, color } = playlist;
    const artistsString = artists.join(", ");

    return (
        <Link 
            href={`/playlist/${id}`}
            className="flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg:zinc-500"
        >
            <Image 
                src={cover}
                alt={`Cover of ${title} by ${artists}`}
                width={80}
                height={80}
                className="object-cover  rounded-md"
            />
            <div className="flex flex-col flex-auto truncate">
                <h4 className="text-sm text-white">{title}</h4>
                <span className="text-gray-400">{artistsString}</span>
            </div>
        </Link>
    );
};

export default AsideMenuCard;
