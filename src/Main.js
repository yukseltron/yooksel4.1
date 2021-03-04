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
import Quercus from "./Quercus";
import './style.css';

class Main extends Component {
  render() {
    return (
		<HashRouter>
			<div id="container" class="mobile-container fade-in">
                <div class="header-content">
                    <div id="nav-header">
                        <h2 id="home"><NavLink to="/">Home</NavLink></h2>
                        <h2><NavLink to="/projects">Projects</NavLink></h2>
                        <h2><NavLink to="/about">About</NavLink></h2>
                        <h2><NavLink to="/contact">Contact</NavLink></h2>
                    </div>
                </div>
    			  <div className="content">
    	             <Route exact path="/" component={Home}/>
     	             <Route path="/projects" component={Projects}/>
    	             <Route path="/about" component={About}/>
    	             <Route path="/contact" component={Contact}/>
                     <Route path="/quercus" component={Quercus}/>
    	           </div>
	        </div>
		</HashRouter>
    );
  }
}

export default Main;
