import { TimeOutline } from "react-ionicons"

export default function MangaCard({ src, title, chapter }) {
    const background = {
        backgroundImage: `url(${ src })`
    }

    return (
        <article className="mb-2">
            <div className="rounded-2xl relative h-56 bg-top bg-cover bg-no-repeat shadow-lg" style={ background }>
                <div className="absolute top-4 right-4 bg-white rounded-full text-sm px-4 py-2">Chapter { chapter }</div>
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