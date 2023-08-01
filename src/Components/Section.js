import React from "react"

function Section(props) {
    return (
        <div className="section">
            <div id={props.section_heading}>
                <h2 className="section_heading">{"/" + props.section_heading}</h2>
                {props.content}
            </div>    
        </div>
    )
}

export default Section