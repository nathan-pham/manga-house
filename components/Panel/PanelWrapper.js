export default function PanelWrapper({ children }) {
    return (
        <div className="flex max-w-6xl px-2 pt-8 mx-auto">
            { children }
        </div>
    )
}