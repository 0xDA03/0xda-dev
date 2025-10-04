import ReactDOM from "react-dom"
import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { VscGithub, VscTwitter } from "react-icons/vsc"
import { BsTwitterX } from "react-icons/bs";
import "./index.css"
import NavButton from "./Components/NavButton"
import Section from "./Components/Section"
import Project from "./Components/Project"
import GalleryItem from "./Components/GalleryItem"
import Social from "./Components/Social"


const header = (
    <header>
        <h1 id ="name" onClick={scroll.scrollToTop}>0xDA</h1>
        <div id="navbar">
            <NavButton section="projects"/>
            {/* <NavButton section="gallery"/> */}
            <NavButton section="contact"/>
        </div>
    </header>
)

const projects = (
    <Section
        section_heading="projects"
        content={
            <div className="subsection">
                <Project item_name="QuantOS" link="https://quantos.finance/" description="bloomberg terminal reimagined for investment research"/>
                <Project item_name="LVL UP" link="https://lvlup.how" description="for those who seek to better themselves..."/>
                <Project item_name="project-03" description="all-in-one accounting solution"/>
                <Project item_name="Torchy" link="https://github.com/0xDA03/torchy" description="discord bot with google api integration"/>
                <Project item_name="MUSIM" link="https://musim-461200.uc.r.appspot.com/" description="parameterized motor unit simulator for neuromuscular research"/>
                <Project item_name="project-06" description="AI-powered inventory helper"/>
            </div>
        } 
    />
)

// const gallery = (
//     <Section
//         section_heading="gallery"
//         content={
//             <div className="subsection">
//
//             </div>
//         }
//     />
// )

const contact = (
    <Section
        section_heading="contact"
        content={
            <div className="subsection">
                <Social icon={<VscGithub size="2rem"/>} link="https://github.com/0xDA03" item_name="0xDA03"/>
                <Social icon={<BsTwitterX size="2rem"/>} link="https://twitter.com/0xda03" item_name="0xda03"/>
            </div>
        }
    />
)

const app = (
    <div id="app">
        {header}
        {projects}
        {/* {gallery} */}
        {contact}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("webpage"))
root.render(app)