import React from "react"

function Project(props) {
    const openLink = () => props.link? window.open(props.link, '_blank') : null

    return (
        <div className="project">
            <h3 className="item_name" onClick={openLink} style={props.link? {cursor: "pointer"}: null}>{props.item_name}</h3>
            <p className="item_description">{props.description}</p>
        </div>
    )
}

export default Project