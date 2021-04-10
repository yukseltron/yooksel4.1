import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Projects from "./Projects";
import Code from "./Code";
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

class UXProjects extends Component {
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
  render() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
    		<div ref={this.myDivToFocus} class="fade-in home">
    			<div class='center-content'>
                    <Fade bottom cascade>
                    <div>
                        <div class="home-intro">
							<h4>Hamid Yuksel's</h4>
                            <h1>UX Work</h1>
                        </div>
                    </div>
                    <div class="center-content">
                        <div class="horizontal">
                            <NavLink to="/uxprojects">
                            <div>
                                <h3 id="ux"  class="p-center click-proj active-page">UX</h3>
                            </div>
                            </NavLink>
                            <NavLink to="/codeprojects">
                            <div>
                                <h3 id="code" class="p-center click-proj">Code</h3>
                            </div>
                            </NavLink>
                            <NavLink to="/artprojects">
                            <div>
                                <h3 id="art"  class="p-center click-proj">Art</h3>
                            </div>
                            </NavLink>
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
                    <div class="home-links">
                        <Projects/>
                    </div>
                </div>
            </div>
            <h2><a class="p-center link-top spacer return" onClick={this.handleOnClick}>Return to top</a></h2>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
  }
}

export default UXProjects;
