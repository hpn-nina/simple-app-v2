import Head from "next/head";
import NextHead from "next/head"
import PropTypes from "prop-types"
const defaultDescription = "This is a freelancer jobs website where we feature freelance jobs all over the world.";
const defaultOGURL = "#";

export default Head = props => {
    <NextHead>
        <meta charSet="UTF-8"/>
        <title>{props.title || ""}</title>
        <meta 
            name="description"
            content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={props.title || ""}/>
        <meta property="og:url" content={props.url || defaultOGURL} />
    </NextHead>
}

Head.PropTypes={
    title: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}