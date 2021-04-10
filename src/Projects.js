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
import quercusIMG from './project-svgs/quercus.svg';
import clayIMG from './quercus/quercus-clay.png';

import routesIMG from './project-svgs/routes-app.svg';
import moreIMG from './project-svgs/more.svg';
import glenIMG from './project-svgs/glenbow.svg';

import walletoIMG from './project-svgs/walleto.svg';
import main from './walleto/landing.png';

import marqetIMG from './project-svgs/marqet.svg';
import hifi from './marqet/hifi.png';

import styles from './projects.css';
import Quercus from "./Quercus";
import Routes from "./Routes";
import Walleto from "./Walleto";
import Glenbow from "./Glenbow";
import Code from "./Code";
import ScrollToTop from './ScrollToTop';

var projs = [];

class Proj {
    constructor(title, platform, year, description, type, img, link, color) {
      this.title = title;
      this.platform = platform;
      this.year = year;
      this.description = description;
      this.type = type;
      this.img = img;
      this.link = link;
      this.color = color;
    }
}

let marqet = new Proj('Art Marqet', 'Mobile Crypto Market', '2021',
"UI Design, UX Research", 'UX', hifi, '/marqet', 'marqet');

let quercus = new Proj('Improving Quercus', 'Web Online Learning System', '2020',
'UI Design, UX Research, Illustration', 'UX', clayIMG, '/quercus', 'quercus');

let routes = new Proj('Routes', 'Mobile Commuting App', '2019',
'UI Design, UX Research', 'UX', routesIMG, '/routes', 'routes');

let walleto = new Proj('Walleto', 'Web Crypto Wallet', '2021',
'UI Design', 'UX', main, '/walleto', 'walleto');

let glenbow = new Proj('Changing Glenbow', 'IA Redesign on Web', '2020',
"UX Research, UI Design", 'UX', glenIMG, '/glenbow', 'glenbow');

let more = new Proj('Other Works', 'Coding, Writing, and Art Projects', '',
'Check out some of my other creative projects.', '', moreIMG, '/more', 'more');

projs[0] = marqet;
projs[1] = walleto;
projs[2] = quercus;
//projs[2] = glenbow;
//projs[4] = Routes;
//projs[5] = Walleto Market;
//projs[6] = Grocery App
//projs[7] = BasketballGM



class Projects extends Component {
    constructor(props){
       super(props)
       //creates a reference for your element to use
       this.myDivToFocus = React.createRef()
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
      const items = []
      for (var i of projs) {
        items.push(
                    <div id={i.color}>
                        <div class="container spacer-small">
                            <Link to={i.link}>
                            <div class="info">
                                <div>
                                    <h1>{i.title}</h1>
                                    <h3>{i.platform}</h3>
                                    <p class="description">{i.description}</p>
                                </div>
                            </div>
                            <div class="img-container">
                                <img loading="lazy" className={styles.animate__animated, styles.animate__fadeInDown} src={i.img}/>
                                <p class="date">{i.year}</p>
                            </div>
                            </Link>
                        </div>
                    </div>
        )
      }
    return (
		<div class="projects-container">
        <LazyLoad>
            <div class="fade-in" id="projects">
				{items}
			</div>
        </LazyLoad>
		</div>
    );
  }
}

export default Projects;
