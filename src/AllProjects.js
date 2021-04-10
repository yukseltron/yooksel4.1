import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import {Slide, Fade, LightSpeed} from 'react-reveal';
import LazyLoad from 'react-lazyload';
import './projects.css';
import Projects from './Projects';
import Play from './Play';
import Code from './Code';
import ScrollToTop from './ScrollToTop';



class AllProjects extends Component {
	render() {
      return (
   	   <div class="fade-in project">
	   <div class="center-content">
		   <div class="horizontal proj-nav">
			   <h3 onClick={this.handleUXClick} class="p-center click-proj">UX Cases</h3>
			   <h3 onClick={this.handleCodeClick} class="p-center click-proj">Code Projects</h3>
			   <h3 onClick={this.handleArtClick} class="p-center click-proj">Art</h3>
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
				   <Code/>
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
   	   </div>
      );
    }
}

export default AllProjects;
