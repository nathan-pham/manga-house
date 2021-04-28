import Root from "../components/Root"
import PanelWrapper from "../components/PanelWrapper"
import CenterPanel from "../components/PanelWrapper/CenterPanel"
import SidePanel from "../components/PanelWrapper/SidePanel"

import { TimeOutline } from "react-ionicons"

function Manga({ src, title, chapter }) {
    const background = {
        backgroundImage: `url(${ src })`
    }

    return (
        <article className="mb-2">
            <div className="rounded-2xl relative h-52 bg-top bg-cover bg-no-repeat shadow-lg" style={ background }>
                <div className="absolute top-4 right-4 bg-white rounded-full text-sm px-3 py-1">Chapter { chapter }</div>
            </div>
            <div className="flex items-center justify-between py-4">
                <h1 className="text-lg font-medium">{ title }</h1>
                <div className="flex items-center">
                    <TimeOutline className="mx-2" />
                    <span>45 Minutes Ago</span>
                </div>
            </div>
        </article>
    )
}

export default function Dashboard() {
    return (
        <Root title="Dashboard">
            <PanelWrapper>
                <SidePanel>
                    bruh
                </SidePanel>
                <CenterPanel>
                    <Manga 
                        src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-Official-Manga-Trailer-Chainsaw-Man-Vol-1-VIZ1.png" 
                        title="Solo Leveling" 
                        chapter="500" 
                    />
                    <Manga 
                        src="https://www.hitc.com/static/uploads/2020/10/Screenshot_2020-10-12-Official-Manga-Trailer-Chainsaw-Man-Vol-1-VIZ1.png" 
                        title="Solo Leveling" 
                        chapter="500" 
                    />
                    <Manga 
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