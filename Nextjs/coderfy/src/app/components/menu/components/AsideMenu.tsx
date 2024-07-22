import { VscLibrary, VscHome, VscSearch } from "react-icons/vsc";
import AsideMenuItem from './AsideMenuItem';
import AsideMenuCard from './AsideMenuCard';
import { playlists } from "@/lib/data";

const AsideMenu = () => {
    return (
        <nav className="flex flex-col flex-1 gap-2" >
            <div className="bg-zinc-900 rounded-lg p-2">
                <ul>
                    <AsideMenuItem text="Home" href="/">
                        <VscHome/>
                    </AsideMenuItem>
                    <AsideMenuItem text="Search">
                        <VscSearch/>
                    </AsideMenuItem>
                </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg p-2 flex-1">
                <ul>
                    <AsideMenuItem text="Tu biblioteca">
                        <VscLibrary/>
                    </AsideMenuItem>
                    {
                        playlists.map((playlist, index ) => <AsideMenuCard key={index} playlist={playlist} /> )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default AsideMenu