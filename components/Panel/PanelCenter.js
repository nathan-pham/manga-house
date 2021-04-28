export default function CenterPanel({ children }) {
    return (
        <div className="flex-auto w-7/12 lg:w-5/12">
            { children }
        </div>
    )
}