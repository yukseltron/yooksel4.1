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
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import routesIMG from './project-svgs/routes-app.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/rsg.svg';
import jpIMG from './project-svgs/jp.svg';
import styles from './projects.css';
import Quercus from "./Quercus";

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

let rsg = new Proj('Random String Generator', 'Grammar Compiler', '2020',
'Generating well-typed random sentences using grammars and probabilities.', 'Code', rsgIMG);

let vab = new Proj('Virtual Assistance Bot', 'Unity VR Capstone', '2020',
'A configurable bot for guiding people in virtual reality experiments.', 'Code', vabIMG);

let routes = new Proj('Routes', 'Mobile Commuting App', '2019',
'A mockup on how to improve your commuting experience.', 'UX', routesIMG, '/quercus');

let monodrift = new Proj('Mono Drift', 'Short Stories', '2019',
'The singularity approaches, and the consequences are felt by all.', 'Writing', monodriftIMG);

let uvc = new Proj('UVC', 'Album Arts', '2018',
'Cover arts for the debut EP and singles of UltraViolet Catastrophe.', 'Art', uvcIMG);

let jp = new Proj('The Josephus Problem', 'Web App', '2018',
'A visualization of the math puzzle solution.', 'Code', jpIMG);

let more = new Proj('Other Works', 'Coding, Writing, and Art Projects', 'ongoing',
'Check out some of my other creative projects.', 'Code', jpIMG);



projs[0] = quercus;
projs[1] = routes;
projs[2] = more;



class Projects extends Component {
  render() {
      const items = []

      for (var i of projs) {
        items.push(
            <Router>
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
                <Switch>
                    <Route path={i.link}/>
                    <Quercus />
                </Switch>
            </Router>
        )
      }
    return (
		<div class="projects-container">
			<div class="fade-in" id="projects">
				{items}
			</div>
		</div>
    );
  }
}

export default Projects;
