import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./Projects";
import './home.css';

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
		<div class="fade-in home animate_animated animate__fadeInUp">
			<div class="intro">
				<div class="home-intro">
                    <h1 id="name">Hamid Yuksel</h1>
                    <div class="iam">
    					<h3>is a </h3>
                        <h3><NavLink to="/projects" class="home-navs gradient1">UX designer</NavLink></h3>
                        <h3>with a background in </h3>
                        <h3><NavLink to="/projects" class="home-navs gradient1">computer science </NavLink></h3>
                        <h3>and an interest in</h3>
                        <h3>art, writing, </h3>
                        <h3><NavLink to="/projects" class="home-navs gradient1">and more</NavLink></h3>
                    </div>
				</div>
                                    <br />
                <div>
                    <h2><NavLink to="/projects" class="link">View my projects</NavLink></h2>
                    <h2><NavLink to="/contact" class="link">Contact me</NavLink></h2>
                </div>
			</div>
			<div class="shape-container">
		        <div id="shape" style={{backgroundImage: backGradient}} class="shape1"></div>
                <p>Built with react</p>
                <p>Last updated Mar 3/2021</p>
			</div>
		</div>
    );
  }
}

export default Home;
