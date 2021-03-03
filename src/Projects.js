import React, { Component } from "react";
import quercusIMG from './project-svgs/quercus.svg';
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import routesIMG from './project-svgs/routes-app.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/rsg.svg';
import jpIMG from './project-svgs/jp.svg';
import styles from './projects.css';

var projs = [];

class Proj {
    constructor(title, platform, year, description, type, img) {
      this.title = title;
      this.platform = platform;
      this.year= year;
      this.description = description;
      this.type = type;
      this.img = img
    }
}

let quercus = new Proj('Improving Quercus', 'UX Case Study', '2020',
'Helping university students with online learning and group formation.', 'UX', quercusIMG);

let rsg = new Proj('Random String Generator', 'Compiler', '2020',
'Generating well-typed random sentences using grammars and probabilities.', 'Code', rsgIMG);

let vab = new Proj('Virtual Assistance Bot', 'VR Capstone', '2020',
'A configurable bot for guiding people in virtual reality experiments.', 'Code', vabIMG);

let routes = new Proj('Routes App', 'UI Mockup', '2019',
'A way to gain metrics from your commutes/trips.', 'UX', routesIMG);

let monodrift = new Proj('Mono Drift', 'Short Stories', '2019',
'The singularity approaches, and the consequences are felt by all.', 'Writing', monodriftIMG);

let uvc = new Proj('UVC', 'Album Arts', '2018',
'Cover arts for the debut EP and singles of UltraViolet Catastrophe.', 'Art', uvcIMG);

let jp = new Proj('The Josephus Problem', 'Web App', '2018',
'A visualization of the math puzzle solution.', 'Code', jpIMG);



projs[0] = quercus;
projs[1] = rsg;
projs[2] = vab;
projs[3] = routes;
projs[4] = monodrift;
projs[5] = uvc;
projs[6] = jp;



class Projects extends Component {
    onlyUX(e) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var uxList = []
        uxList[0] = quercus;
        uxList[1] = routes;
        projs = uxList;
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    onlyCode(e) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var uxList = []
        uxList[0] = rsg;
        uxList[1] = vab;
        uxList[2] = jp;
        projs = uxList;
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    onlyWriting(e) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var uxList = []
        uxList[0] = quercus;
        uxList[1] = routes;
        projs = uxList;
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    onlyArt(e) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var uxList = []
        uxList[0] = quercus;
        uxList[1] = routes;
        projs = uxList;
        e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

  render() {
      const items = []

      for (var i of projs) {
        items.push(
            <div class="container">
                    <div class="info centered" id="project1">
                        <h1>{i.title}</h1>
                        <h3>{i.platform}</h3>
                        <p>{i.description}</p>
                    </div>
                    <div class="img-container">
                        <img className={styles.animate__animated, styles.animate__fadeInDown} src={i.img}/>
                    </div>
            </div>
        )
      }
    return (
		<div class="projects-container">
			<div class="projects-menu">
				<p id="ux" onClick={this.onlyUX}>UX</p>
				<p id="code" onClick={this.onlyCode}>Code</p>
				<p id="writing" onClick={this.onlyWriting}>Writing</p>
				<p id="art" onClick={this.onlyArt}>Art</p>
			</div>
			<div class="fade-in" id="projects">
				{items}
			</div>
		</div>
    );
  }
}

export default Projects;
