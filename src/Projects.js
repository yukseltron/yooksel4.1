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
import routesIMG from './project-svgs/routes-app.svg';
import moreIMG from './project-svgs/more.svg';
import glenIMG from './project-svgs/glenbow.svg';
import walletoIMG from './project-svgs/walleto.svg';
import marqetIMG from './project-svgs/marqet.svg';
import styles from './projects.css';
import Quercus from "./Quercus";
import Routes from "./Routes";
import Walleto from "./Walleto";
import Glenbow from "./Glenbow";
import More from "./More";
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
"UI Design, UX Research", 'UX', marqetIMG, '/marqet', 'marqet');

let quercus = new Proj('Improving Quercus', 'Online Learning System on Web', '2020',
'UI Design, UX Research, Illustration', 'UX', quercusIMG, '/quercus', 'quercus');

let routes = new Proj('Routes', 'Mobile Commuting App', '2019',
'UI Design, UX Research', 'UX', routesIMG, '/routes', 'routes');

let walleto = new Proj('Walleto', 'Crypto Wallet on Web', '2021',
'UI Design, UX Research', 'UX', walletoIMG, '/walleto', 'walleto');

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
                <Link to={i.link}>
                    <div class="container" id={i.color}>
                            <div class="info">
                                <Fade top cascade>
                                <h1>{i.title}</h1>
                                </Fade>
                                <Fade bottom cascade>
                                <h3>{i.platform}</h3>
                                </Fade>
                                <p class="description">{i.description}</p>
                            </div>

                            <div class="img-container">
                            <Fade bottom cascade>
                                <img loading="lazy" className={styles.animate__animated, styles.animate__fadeInDown} src={i.img}/>
                            </Fade>
                            </div>
                            <p class="date">{i.year}</p>
                    </div>
                </Link>
        )
      }
    return (
		<div class="projects-container">
        <LazyLoad>
            <br/>
            <br/>
            <h4 class="p-center" ref={this.myDivToFocus}>These are my UX projects. Check out my <Link class="h-link" to="/more">other projects here.</Link></h4>
			<div class="fade-in" id="projects">
				{items}
                <Link to="/more">
                    <div class="container">
                        <div class="img-container">
                        <Fade bottom cascade>
                            <img loading="lazy" src={moreIMG}/>
                        </Fade>
                        </div>
                        <div class="info">
                        <Fade top cascade>
                            <h1>Other Works</h1>
                        </Fade>
                        <Fade bottom cascade>
                            <h3>Coding, Writing, and Art Projects</h3>
                        </Fade>
                            <p class="description">Check out some of my other creative projects.</p>
                        </div>
                    </div>
                </Link>
			</div>
            <h2><a class="p-center link-top spacer" onClick={this.handleOnClick}>Return to top</a></h2>
        </LazyLoad>
		</div>
    );
  }
}

export default Projects;
