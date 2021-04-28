import Root from "../components/Root"
import Logo from "../components/Root/Logo"
import PanelWrapper from "../components/Panel/PanelWrapper"
import CenterPanel from "../components/Panel/PanelCenter"
import SidePanel from "../components/Panel/PanelSide"
import MangaSearch from "../components/Manga/MangaSearch"
import MangaCard from "../components/Manga/MangaCard"


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