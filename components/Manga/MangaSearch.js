import { OptionsOutline, SearchOutline } from "react-ionicons"

export default function MangaSearch() {
    return (
        <div className="relative w-full px-4 py-3 mb-4 bg-gray-100 rounded-full flex items-center overflow-hidden">
            <SearchOutline />
            <input className="w-full h-full px-2 outline-none bg-transparent" placeholder="Search comics" />
            <OptionsOutline />
        </div>
    )
}