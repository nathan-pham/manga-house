import { 
    HomeOutline,
    MailOutline,
    FlameOutline,
    PersonOutline,
    BookmarkOutline
} from "react-ionicons"


export default function Navigation({ current }) {
    function Item({ href="#", type, active, children }) {
        const icons = {
            home: HomeOutline,
            mail: MailOutline,
            fire: FlameOutline,
            person: PersonOutline,
            bookmark: BookmarkOutline
        }

        const Icon = icons[type]
        
        return (
            <li>
                <a href={ href } className={ 
                    ["flex items-center px-4 py-2 font-semibold text-lg rounded-full mb-2 hover:bg-purple-50 hover:text-purple-600", active ? "text-purple-600" : ""].join(" ") 
                }>
                    <Icon color="inherit" />
                    <span className="ml-2">
                        { children }
                    </span>
                </a>
            </li>
        )
    }

    return (
        <ul className="list-none mt-6">
            <Item type="home" active>Home</Item>
            <Item type="fire">Trending</Item>
            <Item type="mail">Messages</Item>
            <Item type="bookmark">Bookmarks</Item>
            <Item type="person">Profile</Item>
        </ul>
    )
}
