import { OptionsOutline, SearchOutline } from "react-ionicons"

export default function MangaSearch({ inject }) {
    return (
        <div className={ ["relative px-4 py-3 bg-gray-100 rounded-full h-12 flex items-center overflow-hidden", inject].join(' ') }>
            <SearchOutline />
            <input className="w-full h-full px-2 outline-none bg-transparent" placeholder="Search comics" />
            <OptionsOutline />
        </div>
    )
}