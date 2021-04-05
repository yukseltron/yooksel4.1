import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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


class Footer extends Component {
  render() {
    return (
		<div class="horizontal border-top">
			<div class="text-left">
				<h4>UX Cases</h4>
				<Link to="/quercus"><p>Improving Quercus</p></Link>
				<Link to="/marqet"><p>Marqet</p></Link>
				<Link to="/walleto"><p>Walleto</p></Link>
			</div>
			<div class="text-left">
				<h4>Code Projects</h4>
				<Link to="/virtual-assistance-bot"><p>Virtual Assistance Bot</p></Link>
				<Link to="/random-string-generator"><p>Random String Generator</p></Link>
				<Link to="/mono-drift"><p>Mono Drift</p></Link>
				<Link to="/jp"><p>The Josephus Problem</p></Link>
				<Link to="/emojihoroscope"><p>Emoji Horoscope</p></Link>
			</div>
			<div class="text-left">
				<h4>Art Projects</h4>
				<Link to="/UVC"><p>UltraViolet Catastrophe</p></Link>
			</div>
		</div>
    );
  }
}

export default Footer;
