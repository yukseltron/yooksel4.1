import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import './home.css';
import uxstuffIMG from './project-svgs/uxstuff.svg';
import aboutIMG from './project-svgs/about.svg';

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
  render() {
    return (
        <div>
    		<div class="fade-in home">
    			<div class="intro">
    				<div class="home-intro">
                        <p class="hello p-center">Hi! I'm</p>
                        <h1 id="name">Hamid Yuksel</h1>
                        <div class="iam">
        					<h3>I'm a</h3>
                            <h1 class="home-navs">UX designer</h1>
                            <h3>with a background in </h3>
                            <h1 class="home-navs">computer science </h1>
                            <h3>and an interest in</h3>
                            <h3>art, writing, </h3>
                            <h1 to="/projects" class="home-navs">and more</h1>
                        </div>
    				</div>
                    <br />
                    <div class="home-links">
                        <h2><NavLink to="/projects" class="link">View my work</NavLink></h2>
                        <br/>
                        <h2><NavLink to="/contact" class="link">Contact me</NavLink></h2>
                    </div>
    			</div>
                <br/>
                <br/>
    		</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="fade-in spacer section-1 home">
                <div class="intro">
                    <div class="home-intro">
                        <div class="iam">
                            <h1>As a UX designer,</h1>
                            <h3>I focus on meaningful interactions</h3>
                            <h3>and useful interfaces.</h3>
                        </div>
                    </div>
                    <br />
                    <div class="home-links">
                        <h2><NavLink to="/projects" class="link">View my UX work</NavLink></h2>
                        <br/>
                        <h2><a class="inline-a link" target="_blank" href="https://drive.google.com/file/d/1H-tHPjIP5dlZl9QtXDgoibdMZKjLbyDJ/view?usp=sharing">
                            My resume PDF
                        </a></h2>
                    </div>
                </div>
                <div class="img-container">
                    <img src={uxstuffIMG}/>
                </div>
            </div>
            <div class="fade-in spacer home section-2 ">
                <div class="intro">
                    <div class="home-intro">
                        <div class="iam">
                            <h1>For other projects,</h1>
                            <h3>I code, write,</h3>
                            <h3>and make art.</h3>
                        </div>
                    </div>
                    <br />
                    <div class="home-links">
                        <h2><NavLink to="/more" class="link">View my other work</NavLink></h2>
                    </div>
                </div>
                <br />
                <br />
                <div class="shape-container center-content">
                    <div id="shape" style={{backgroundImage: backGradient}} class="shape1"></div>
                </div>
            </div>
            <div class="fade-in section-3 home">
                <div class="intro">
                    <div class="home-intro">
                        <div class="iam">
                            <h1>What else?</h1>
                        </div>
                    </div>
                    <br />
                    <div class="home-links">
                        <h2><NavLink to="/about" class="link">Learn about me</NavLink></h2>
                    </div>
                </div>
                <br />
                <br />
                <div class="shape-container center-content">
                    <img src={aboutIMG}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <p class="text-right">I built this site with React</p>
            <p class="text-right">Last updated Mar.18.2021</p>
        </div>
    );
  }
}

export default Home;
