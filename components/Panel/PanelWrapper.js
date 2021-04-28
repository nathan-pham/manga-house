export default function PanelWrapper({ children }) {
    return (
        <div className="flex max-w-7xl px-4 mt-8 mx-auto">
            { children }
        </div>
    )
}