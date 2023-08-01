import React from "react"

function GalleryItem(props) {
    const  openLink = () => props.link? window.open(props.link, '_blank') : null
    
    return (
        <div className="gallery_item">
            <div id={props.item_name}>
                <img className="media" src={props.source}/>
                <div>
                    <h3 className="item_name" onClick={openLink} style={props.link? {cursor: "pointer"}: null}>{props.item_name}</h3>
                    <p className="item_description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem