import ReactDOM from 'react-dom';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTable } from 'react-table';
import './index.css';

const root = ReactDOM.createRoot (
    document.getElementById('webpage')
);

const name = (
    <h1 id ="name">0xDA</h1>
);

function Nav_button(props) {
    return <button id="nav_button">{props.section}</button>
};

const header = (
    <div class="header">
        {name}
        <div id="navbar">
            <Nav_button section="projects"/>
            <Nav_button section="gallery"/>
            <Nav_button section="blog"/>
            <Nav_button section="socials"/>
        </div>
    </div>
);

function Section(props) {
    return (
        <div class="section">
            <div id={props.section_heading}>
                <Fade timeout="1000">
                    <SectionHeading section_heading={props.section_heading}/>
                </Fade>
            {props.content}
            </div>    
        </div>
    );
}

function SectionHeading(props) {
    return <h2 class="section_heading">{"/" + props.section_heading}</h2>;
}

function Project(props) {
    return (
        <div class="project">
            <div id={props.project_name}>
                <h3 class="project_name">{props.project_name}</h3>
                <p class="project_description">{props.description}</p>
            </div>
        </div>
    );
}

const projects = (
    <Section
        section_heading="projects"
        content={
            <div class="subsection">
                <Fade timeout="1000">
                    <Project project_name="QuantOS" description="revolutionary investment research platform"/>
                    <Project project_name="lyricle" description="wordle style lyric guessing game"/>
                    <Project project_name="tbd01" description="an all-in-one accounting solution"/>
                </Fade>
            </div>
        } 
    />
);

function GalleryItem(props) {
    return (
        <div class="gallery_item">
            <div id={props.item_name}>
                <img class="media" src={props.source}/>
                <div>
                    <h3 class="item_name">{props.item_name}</h3>
                    <p class="item_description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

const gallery = (
    <Section
        section_heading="gallery"
        content={
            <div class="subsection">
                <Fade timeout="1000">
                    <GalleryItem source="https://lh3.googleusercontent.com/Noh38d22G2uDIDBvQw_w94Ht9Adh9nUb_SrZcSJq2lIs0ZYbGuEz5nLji_fOjRzBALWtWEx1ePkmw2SuzBU0iECRScZoLgt1BZll=w600" item_name="kanpai panda" description="#8105"/>
                </Fade>
            </div>
        }
    />
);

const blog = (
    <Section
        section_heading="blog"
    />
);

const socials = (
    <Section
        section_heading="socials"
    />
);

const app = (
    <div class="app">
        {header}
        {projects}
        {gallery}
        {blog}
        {socials}
    </div>
)

root.render(app);