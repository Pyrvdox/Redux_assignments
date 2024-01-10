import React from "react";
import {Link, useParams} from "react-router-dom";

const listOfLinks = [
    {title: "Wszystkie", urlValue:''},
    {title: "Do 10zł", urlValue: "10"},
    {title: "Do 50zł", urlValue: "50"},
    {title: "Do 100zł", urlValue: "100"},
]
const Links = ({filter}) => {
    const {field} = useParams()
    return(
        <ul>
            {listOfLinks.map((link, index) => {
                return (
                    <li key={index}>
                        <Link to={"/" + link.urlValue}
                              onClick={() => filter(link.urlValue)}>
                            {link.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Links;