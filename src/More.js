import './projects-style.css';
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/rsg.svg';
import jpIMG from './project-svgs/jp.svg';
import styles from './projects.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import RandomStringGenerator from "./RandomStringGenerator";
import VirtualAssistanceBot from "./VirtualAssistanceBot";
import MonoDrift from "./MonoDrift";
import UVCatastrophe from "./UVCatastrophe";
import JosephusProblem from "./JosephusProblem";
import ScrollToTop from './ScrollToTop';



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


let rsg = new Proj('Random String Generator', 'Grammar Compiler', '2020',
'Generating well-typed random sentences using grammars and probabilities.', 'Code', rsgIMG, '/random-string-generator');

let vab = new Proj('Virtual Assistance Bot', 'Unity VR Capstone', '2020',
'A configurable bot for guiding people in virtual reality experiments.', 'Code', vabIMG, '/virtual-assistance-bot');

let monodrift = new Proj('Mono Drift', 'Short Stories', '2019',
'The singularity approaches, and the consequences are felt by all.', 'Writing', monodriftIMG, '/mono-drift');

let uvc = new Proj('UVC', 'Album Arts', '2018',
'Cover arts for the debut EP and singles of UltraViolet Catastrophe.', 'Art', uvcIMG, '/uvc');

let jp = new Proj('The Josephus Problem', 'Web App', '2018',
'A visualization of the math puzzle solution.', 'Code', jpIMG, '/jp');

projs[0] = rsg;
projs[1] = vab;
projs[2] = monodrift;
projs[3] = uvc;
projs[4] = jp;

class More extends Component {
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
            <h4>My programming, writing, and graphic design work. <Link class="h-link" to="/projects">Want my UX stuff?</Link></h4>
			<div class="fade-in" id="projects">
				{items}
			</div>
		</div>
    );
  }
}

export default More;
