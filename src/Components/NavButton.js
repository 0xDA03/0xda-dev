import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

function NavButton(props) {
    const offset = -window.innerHeight * 0.5 + 1

    return (
        <button id="nav_button">
            <Link activeClass="active" smooth offset={offset} spy={true} to={props.section}>{props.section}</Link>
        </button>
    )
}

export default NavButton