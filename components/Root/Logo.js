export default function Logo() {
    return (
        <div className="flex h-12">
            <div className="flex items-center">
                <img src="/icons/apple-icon.png" className="w-10 h-10 rounded-lg shadow-lg" />
                <h1 className="text-xl text-purple-600 leading-none font-semibold whitespace-nowrap ml-4 hidden md:block lg:font-bold lg:text-2xl">MangaHouse</h1>
            </div>
        </div>
    )
}