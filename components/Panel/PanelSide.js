export default function SidePanel({ children, left }) {
    const inject = left
        ? "hidden pr-4 md:block"
        : "hidden pl-4 lg:block"

    return (
        <div className={ ["w-24 flex-auto", inject].join(' ') }>
            { children }
        </div>
    )
}