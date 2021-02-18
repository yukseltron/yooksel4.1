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
	          <div class="topnav">
	              <div class="header-content">
	                  <a id="name"><NavLink to="/">Hamid Yuksel</NavLink></a>
	                  <div id="nav-header">
	                      <a class="nav-header"><NavLink to="/projects">Projects</NavLink></a>
	                      <a class="nav-header"><NavLink to="/about">About</NavLink></a>
	                      <a class="nav-header"><NavLink to="/contact">Contact</NavLink></a>
	                  </div>
	                  <div class="nav-hamburger" href="javascript:void(0);" onclick="hideNav()">
	                      <div></div>
	                      <div></div>
	                      <div></div>
	                  </div>
	              </div>
	              <div class="links" id="myLinks">
	                <a href="#" >Projects</a>
	                <a href="#" >About</a>
	                <a href="#" >Contact</a>
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

export default Main;
