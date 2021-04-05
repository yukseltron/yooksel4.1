import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Projects from "./Projects";
import More from "./More";
import Play from "./Play";
import About from "./About";
import {Slide, Fade, LightSpeed} from 'react-reveal';
import './home.css';
import uxstuffIMG from './project-svgs/uxstuff.svg';

var backGradient = "";

function changeShape(type) {
    if (type == 'designer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #F8333C 0%, #FCAB10 100%)";
    } else if (type == 'developer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #38AECC 0%, #35A7FF 100%)";
    } else if (type == 'student') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #FCAB10 0%, #FFE74C 100%)";
    }
}

function returnShape() {
    var x = document.getElementById("shape");
    x.style.backgroundImage = "none";
    x.style.backgroundImage = "linear-gradient(45deg, #81F499 0%, #6DD3CE 100%)";
}

class Home extends Component {
    constructor(props){
       super(props)
       //creates a reference for your element to use
       this.myDivToFocus = React.createRef()
       this.UXwork = React.createRef()
       this.Codework = React.createRef()
       this.Artwork = React.createRef()
    }

    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({
               behavior: "smooth",
               block: "end"
            })
        }
    }

    handleUXClick = (event) => {
        //.current is verification that your element has rendered
        if(this.UXwork.current){
            this.UXwork.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
            })
        }
    }

    handleCodeClick = (event) => {
        //.current is verification that your element has rendered
        if(this.Codework.current){
            this.Codework.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
            })
        }
    }

    handleArtClick = (event) => {
        //.current is verification that your element has rendered
        if(this.Artwork.current){
            this.Artwork.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
            })
        }
    }
  render() {
    return (
        <div>
            <div class="spacer"></div>
    		<div ref={this.myDivToFocus} class="fade-in home spacer border-bottom">
    			<div class='center-content spacer'>
                    <Fade bottom cascade>
                    <div>
        				<div class="home-intro">
                            <h4 class="p-center">Designer | Developer | Artist</h4>
                            <h1 id="name">Hamid Yuksel</h1>
        				</div>
                        <br/>
                        <br/>
                        <div class="shape-container">
                            <div id="shape" class="shape1"></div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="center-content spacer">
                        <div class="horizontal">
                            <h3 onClick={this.handleUXClick} class="p-center click-proj">UX Cases</h3>
                            <h3 onClick={this.handleCodeClick} class="p-center click-proj">Code Projects</h3>
                            <h3 onClick={this.handleArtClick} class="p-center click-proj">Art</h3>
                        </div>
                    </div>
                    </Fade>
    			</div>
    		</div>
            <br/>
            <div ref={this.UXwork}></div>
            <br/>
            <div class="fade-in spacer home">
                <div class="intro">
                    <div class="home-intro">
                            <div>
                                <div class="border-bottom ux-color center-content">
                                    <h1 id="name" class="text-center">UX Cases</h1>
                                </div>
                            </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="home-links">
                        <Projects/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div ref={this.Codework}></div>
            <br/>
            <div  class="fade-in spacer home">
                <div class="intro">
                    <div class="home-intro">
                            <div>
                                <div class="border-bottom center-content">
                                    <h1 class="text-center" id="name">Code Projects</h1>
                                </div>
                            </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="home-links">
                        <More/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div ref={this.Artwork}></div>
            <br/>
            <div class="fade-in spacer home">
                <div class="intro">
                    <div class="home-intro">
                            <div>
                                <div class="border-bottom center-content">
                                    <h1 class="text-center" id="name">Art</h1>
                                </div>
                            </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="home-links">
                        <Play/>
                    </div>
                </div>
            </div>
            <h2><a class="p-center link-top spacer return" onClick={this.handleOnClick}>Return to top</a></h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <p class="text-right">I built this site with React</p>
            <p class="text-right">Last updated Apr.5.2021</p>
        </div>
    );
  }
}

export default Home;
