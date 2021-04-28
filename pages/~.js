import Root from "../components/Root"
import PanelWrapper from "../components/Panel/PanelWrapper"
import CenterPanel from "../components/Panel/PanelCenter"
import SidePanel from "../components/Panel/PanelSide"
import MangaSearch from "../components/Manga/MangaSearch"
import MangaCard from "../components/Manga/MangaCard"
import Logo from "../components/Root/Logo"

import { GridOutline } from "react-ionicons"

// TODO: rewrite layout with grid (to keep things consistent)

function Profile({ src, identifier, displayName, description }) {
    return (
        <aside className="rounded-xl bg-gray-100 px-5 py-5 mt-6">
            <div className="flex items-center mb-4">
                <img src={ src } className="object-cover w-16 h-16 rounded-full mr-4" />
                <div>
                    <h1>{ displayName }</h1>
                    <h2 className="text-gray-700 capitalize">@{ identifier }</h2>
                </div>
            </div>
            <div className="flex mb-4">
                <p className="mr-2 text-gray-700"><span className="font-semibold text-black">0</span> bookmarks</p>
                <p className="text-gray-700"><span className="font-semibold text-black">0</span> friends</p>
            </div>
            <p className="leading-tight text-gray-700">{ description }</p>
        </aside>
    )
}

export default function Dashboard() {
    return (
        <Root title="Dashboard">
            <PanelWrapper>
                <SidePanel left>
                    <Logo />
                    <h1 className="font-semibold text-xl">People</h1>
                </SidePanel>
                <CenterPanel>
                    <MangaSearch />
                    <div className="my-6">
                        <h1 className="font-semibold text-xl">New Uploads</h1>
                    </div>
                    <MangaCard 
                        src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-Official-Manga-Trailer-Chainsaw-Man-Vol-1-VIZ1.png" 
                        title="Solo Leveling" 
                        chapter="500" 
                    />
                </CenterPanel>
                <SidePanel>
                    <div className="w-full">
                        <div className="flex items-center justify-center rounded-full w-12 h-12 ml-auto border-2 border-grey-700">
                            <GridOutline />
                        </div>
                    </div>
                    <Profile 
                        src="https://nathanpham.me/icons/apple-icon.png"
                        identifier="N27U6ID"
                        displayName="Nathaniel"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum sit amet leo a pretium."
                    />
                </SidePanel>
            </PanelWrapper>
        </Root>
    )
}