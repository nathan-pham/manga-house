import Root from "../components/Root"
import PanelWrapper from "../components/Panel/PanelWrapper"
import CenterPanel from "../components/Panel/PanelCenter"
import SidePanel from "../components/Panel/PanelSide"
import MangaSearch from "../components/Manga/MangaSearch"
import MangaCard from "../components/Manga/MangaCard"

function Logo() {
    return (
        <div className="flex items-center">
            <img src="/icons/apple-icon.png" className="w-12 h-12 rounded-lg shadow-lg mr-4" />
            <h1 className="text-2xl font-semibold whitespace-nowrap">Manga House</h1>
        </div>
    )
}

export default function Dashboard() {
    return (
        <Root title="Dashboard">
            <PanelWrapper>
                <SidePanel>
                    <Logo />
                </SidePanel>
                <CenterPanel>
                    <MangaSearch />
                    <MangaCard 
                        src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-Official-Manga-Trailer-Chainsaw-Man-Vol-1-VIZ1.png" 
                        title="Solo Leveling" 
                        chapter="500" 
                    />
                </CenterPanel>
                <SidePanel>
                    bruh
                </SidePanel>
            </PanelWrapper>
        </Root>
    )
}