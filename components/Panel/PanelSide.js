export default function SidePanel({ children, left }) {
    const inject = left
        ? "hidden pr-5 md:block"
        : "hidden pl-5 lg:block"

    return (
        <div className={ ["w-24 flex-auto", inject].join(' ') }>
            { children }
        </div>
    )
}