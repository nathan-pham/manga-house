import Seo from "./Seo"

export default function Root(props) {
    return (
        <>
            <Seo title={props.title} description={props.description} />
            { props.children }
        </>
    )
}