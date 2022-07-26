import ReactDOM from 'react-dom';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';
import { VscGithub, VscTwitter } from "react-icons/vsc";
import './index.css';

function NavButton(props) {
    return <button id="nav_button"><Link activeClass="active" smooth offset={-140} spy={true} to={props.section}>{props.section}</Link></button>
}

function Section(props) {
    return (
        <div className="section">
            <div id={props.section_heading}>
                <Fade timeout={1000}>
                    <h2 className="section_heading">{"/" + props.section_heading}</h2>
                </Fade>
            {props.content}
            </div>    
        </div>
    );
}

function Project(props) {
    function openLink() {
        props.link? window.open(props.link, '_blank') : null;
    }
    return (
        <div className="project">
            <div id="indenter">
                <h3 className="item_name"></h3>
                <p className="item_description"></p>
            </div>
            <div id={props.item_name}>
                <h3 className="item_name" onClick={openLink} style={props.link? {cursor: "pointer"}: null}>{props.item_name}</h3>
                <p className="item_description">{props.description}</p>
            </div>
        </div>
    );
}

function GalleryItem(props) {
    function openLink() {
        props.link? window.open(props.link, '_blank') : null;
    }
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
    );
}

function Social(props) {
    function openLink() {
        props.link? window.open(props.link, '_blank') : null;
    }
    return (
        <div className="social">
            <div id="social_icon">
                {props.icon}
            </div>
            <div id={props.item_name}>
                <h3 className="item_name" style={props.link? {cursor: "pointer"}: null} onClick={openLink}>{props.item_name}</h3>
            </div>
        </div>
    );
}

const header = (
    <div className="header">
        <h1 id ="name" onClick={scroll.scrollToTop}>0xDA</h1>
        <div id="navbar">
            <NavButton section="projects"/>
            <NavButton section="gallery"/>
            <NavButton section="contact"/>
        </div>
    </div>
);

const projects = (
    <Section
        section_heading="projects"
        content={
            <div className="subsection">
                <Fade timeout={1000}>
                    <Project item_name="QuantOS" link="https://quantrinsic.com/" description={"modular investment research platform"}/>
                    <Project item_name="project-02" description="all-in-one accounting solution"/>
                    <Project item_name="project-03" description="wordle style lyric guessing game"/>
                </Fade>
            </div>
        } 
    />
);

const gallery = (
    <Section
        section_heading="gallery"
        content={
            <div className="subsection">
                <Fade timeout={1000}>
                    <GalleryItem source="https://lh3.googleusercontent.com/Noh38d22G2uDIDBvQw_w94Ht9Adh9nUb_SrZcSJq2lIs0ZYbGuEz5nLji_fOjRzBALWtWEx1ePkmw2SuzBU0iECRScZoLgt1BZll=w600" item_name="kanpai panda" link="https://opensea.io/assets/matic/0xacf63e56fd08970b43401492a02f6f38b6635c91/8105/" description="#8105"/>
                </Fade>
            </div>
        }
    />
);

const contact = (
    <Section
        section_heading="contact"
        content={
            <div className="subsection">
                <Fade timeout={1000}>
                    <Social icon={<VscGithub size="2rem"/>} link="https://github.com/0xDA03" item_name="0xDA03"/>
                    <Social icon={<VscTwitter size="2rem"/>} link="https://twitter.com/0xda03" item_name="0xda03"/>
                </Fade>
            </div>
        }
    />
);

const app = (
    <div className="app">
        {header}
        {projects}
        {gallery}
        {contact}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('webpage'));
root.render(app);