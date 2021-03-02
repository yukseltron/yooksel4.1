import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import './style.css';

class Main extends Component {
  render() {
    return (
		<HashRouter>
			<div id="container" class="mobile-container fade-in">
                <div class="header-content">
                    <h2 id="name"><NavLink to="/">Hamid Yuksel</NavLink></h2>
                    <div id="nav-header">
                        <h3><NavLink to="/projects">Projects</NavLink></h3>
                        <h3><NavLink to="/about">About</NavLink></h3>
                        <h3><NavLink to="/contact">Contact</NavLink></h3>
                    </div>
                </div>
    			  <div className="content">
    	             <Route exact path="/" component={Home}/>
     	             <Route path="/projects" component={Projects}/>
    	             <Route path="/about" component={About}/>
    	             <Route path="/contact" component={Contact}/>
    	           </div>
	        </div>
		</HashRouter>
    );
  }
}

function hideNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.transition = "display 2s";
  }
}

export default Main;
