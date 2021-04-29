import Root from "../components/Root"
import PanelWrapper from "../components/Panel/PanelWrapper"
import CenterPanel from "../components/Panel/PanelCenter"
import SidePanel from "../components/Panel/PanelSide"
import MangaSearch from "../components/Manga/MangaSearch"
import MangaCard from "../components/Manga/MangaCard"
import Logo from "../components/Root/Logo"
import Navigation from "../components/Navigation"

import { GridOutline } from "react-ionicons"

function Profile({ src, identifier, displayName, description }) {
    return (
        <aside className="rounded-xl bg-gray-100 px-5 py-5">
            <div className="flex items-center mb-4">
                <img src={ src } className="object-cover w-16 h-16 rounded-full mr-4" />
                <div>
                    <h1 className="font-semibold">{ displayName }</h1>
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

function SettingsIcon() {
    return (
        <div className="flex items-center justify-center rounded-full w-12 h-12 border-2 border-grey-700">
            <GridOutline />
        </div>
    )
}

function ProfileIcon({ src }) {
    return (
        <img src={ src } className="object-cover w-12 h-12 rounded-full border-2 border-white shadow-lg" />
    )
}

export default function Dashboard() {
    return (
        <Root title="Dashboard">
            <PanelWrapper>
                <SidePanel left>
                    <Logo />
                    <Navigation />
                </SidePanel>
                <CenterPanel>
                    <div className="flex items-center justify-between w-full mb-4">
                        <div className="flex items-center">
                            <ProfileIcon src="https://nathanpham.me/icons/apple-icon.png" />
                            <div className="ml-4">
                                <p className="text-gray-700 text-sm">Good Afternoon</p>
                                <h1 className="font-semibold">Nathaniel</h1>
                            </div>
                        </div>
                        <SettingsIcon />
                    </div>
                    <MangaSearch />

                    <div className="my-4">
                        <h1 className="font-semibold text-xl">Latest Releases</h1>
                    </div>
                    <MangaCard 
                        src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-Official-Manga-Trailer-Chainsaw-Man-Vol-1-VIZ1.png" 
                        title="Solo Leveling" 
                        chapter="500" 
                    />
                </CenterPanel>
                <SidePanel>
                    <Profile 
                        src="https://nathanpham.me/icons/apple-icon.png"
                        identifier="N27U6ID"
                        displayName="Nathaniel"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum sit amet leo a pretium."
                    />
                    {/* <h1 className="font-semibold text-xl mt-4">People</h1>
                    <p className="text-gray-700">You have 0 friends online right now</p> */}
                </SidePanel>
            </PanelWrapper>
        </Root>
    )
}