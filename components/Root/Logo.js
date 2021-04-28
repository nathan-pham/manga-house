export default function Logo() {
    return (
        <div className="flex items-center h-12">
            <div className="flex sm:items-center">
                <img src="/icons/apple-icon.png" className="w-10 h-10 rounded-lg shadow-lg" />
                <h1 className="text-2xl font-semibold whitespace-nowrap ml-4 hidden md:block">MangaHouse</h1>
            </div>
        </div>
    )
}