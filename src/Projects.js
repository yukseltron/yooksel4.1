import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import quercusIMG from './project-svgs/quercus.svg';
import routesIMG from './project-svgs/routes-app.svg';
import jpIMG from './project-svgs/jp.svg';
import glenIMG from './project-svgs/glenbow.svg';
import walletoIMG from './project-svgs/walleto.svg';
import styles from './projects.css';
import Quercus from "./Quercus";
import Routes from "./Routes";
import Walleto from "./Walleto";
import Glenbow from "./Glenbow";
import More from "./More";

var projs = [];

class Proj {
    constructor(title, platform, year, description, type, img, link) {
      this.title = title;
      this.platform = platform;
      this.year = year;
      this.description = description;
      this.type = type;
      this.img = img;
      this.link = link;
    }
}

let quercus = new Proj('Improving Quercus', 'Online Learning System on Web', '2020',
'Helping students organize their courses and form teams online.', 'UX', quercusIMG, '/quercus');

let routes = new Proj('Routes', 'Mobile Commuting App', '2019',
'A mockup on how to improve your commuting experience.', 'UX', routesIMG, '/routes');

let walleto = new Proj('Walleto', 'Crypto Wallet on Web', '2021',
'Designing a way to safely store and use cryptocurrencies', 'UX', walletoIMG, '/walleto');

let glenbow = new Proj('Changing Glenbow', 'Museum IA Redesign on Web', '2021',
'Improving the museum site navigation and organization', 'UX', glenIMG, '/glenbow');

let more = new Proj('Other Works', 'Coding, Writing, and Art Projects', 'ongoing',
'Check out some of my other creative projects.', '', jpIMG, '/more');


projs[0] = quercus;
projs[1] = walleto;
projs[2] = glenbow;
projs[3] = routes;
projs[4] = more;



class Projects extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
      this.myRef.current.scrollTo(0, 0);
    }

  render() {
      const items = []

      for (var i of projs) {
        items.push(
                <Link to={i.link}>
                    <div class="container">
                            <div class="info">
                                <h1>{i.title}</h1>
                                <h3>{i.platform}</h3>
                            </div>
                            <div class="img-container">
                                <img className={styles.animate__animated, styles.animate__fadeInDown} src={i.img}/>
                            </div>
                            <p class="description">{i.description}</p>
                            <p class="date">{i.year}</p>
                    </div>
                </Link>
        )
      }
    return (
		<div ref={this.myRef} class="projects-container">
            <h4>These are my UX projects. Check out my <Link class="h-link" to="/more">other projects here.</Link></h4>
			<div class="fade-in" id="projects">
				{items}
			</div>
		</div>
    );
  }
}

export default Projects;
