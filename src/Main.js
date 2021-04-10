import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Playground from "./Playground";
import AllProjects from "./AllProjects";
import About from "./About";
import Contact from "./Contact";
import Quercus from "./Quercus";
import RandomStringGenerator from "./RandomStringGenerator";
import VirtualAssistanceBot from "./VirtualAssistanceBot";
import Routes from "./Routes";
import MonoDrift from "./MonoDrift";
import UVCatastrophe from "./UVCatastrophe";
import JosephusProblem from "./JosephusProblem";
import Walleto from "./Walleto";
import Marqet from "./Marqet";
import Glenbow from "./Glenbow";
import EmojiHoroscope from "./EmojiHoroscope";
import Code from "./Code";
import CodeProjects from "./CodeProjects";
import UXProjects from "./UXProjects";
import ArtProjects from "./ArtProjects";
import './style.css';
import ScrollToTop from './ScrollToTop';

class Main extends Component {
  render() {
    return (
		<HashRouter>
            <ScrollToTop>
			<div id="container" class="mobile-container fade-in">
                <div class="header-content">
                    <div id="nav-header">
                        <h2><NavLink to="/">Projects</NavLink></h2>
                        <h2><NavLink to="/about">About</NavLink></h2>
                        <h2><NavLink to="/contact">Contact</NavLink></h2>
                    </div>
                </div>
    			  <div className="content">
    	             <Route exact path="/" component={Home}/>
                      <Route exact path="/projects" component={AllProjects}/>
     	             <Route path="/playground" component={Playground}/>
    	             <Route path="/about" component={About}/>
    	             <Route path="/contact" component={Contact}/>
                     <Route path="/quercus" component={Quercus}/>
                     <Route path="/random-string-generator" component={RandomStringGenerator}/>
                     <Route path="/virtual-assistance-bot" component={VirtualAssistanceBot}/>
                     <Route path="/routes" component={Routes}/>
                     <Route path="/mono-drift" component={MonoDrift}/>
                     <Route path="/uvc" component={UVCatastrophe}/>
                     <Route path="/jp" component={JosephusProblem}/>
                     <Route path="/emojihoroscope" component={EmojiHoroscope}/>
                     <Route path="/walleto" component={Walleto}/>
                     <Route path="/glenbow" component={Glenbow}/>
                     <Route path="/marqet" component={Marqet}/>
                     <Route path="/code" component={Code}/>
                     <Route path="/codeprojects" component={CodeProjects}/>
                     <Route path="/uxprojects" component={UXProjects}/>
                     <Route path="/artprojects" component={ArtProjects}/>
    	           </div>
	        </div>
            </ScrollToTop>
		</HashRouter>
    );
  }
}

export default Main;
