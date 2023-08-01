import React from "react"

function Social(props) {
    const openLink = () => props.link? window.open(props.link, "_blank") : null

    return (
        <div className="social">
            {props.icon}
            <h3 className="item_name" style={props.link? {cursor: "pointer"}: null} onClick={openLink}>{props.item_name}</h3>
        </div>
    )
}

export default Social