import React, { Component } from "react";
import quercusIMG from './project-svgs/quercus.svg';
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import routesIMG from './project-svgs/routes-app.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/rsg.svg';
import jpIMG from './project-svgs/jp.svg';
import './projects.css';

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

let quercus = new Proj('Improving Querucs', 'UX Case Study', '2020',
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
  render() {
      const items = []

      for (var i of projs) {
        items.push(
            <div class="container">
                    <div class="info centered" id="project1">
                        <h2>{i.title}</h2>
                        <h3>{i.platform}</h3>
                        <p>{i.description}</p>
                    </div>
                    <div class="img-container">
                        <img class="animate__animated animate__fadeInDown" src={i.img}/>
                    </div>
            </div>
        )
      }
    return (
		<div class="projects-container">
        <link rel="stylesheet" href="projects.css"/>
			<div class="projects-menu">
				<p id="ux" onclick="onlyUX();">UX</p>
				<p id="code" onclick="onlyCode();">Code</p>
				<p id="writing" onclick="onlyWriting();">Writing</p>
				<p id="art" onclick="onlyArt();">Art</p>
			</div>
			<div class="fade-in" id="projects">
				{items}
			</div>
		</div>
    );
  }
}


function onlyUX() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "900";
    a.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    a.style.backgroundColor = "white";
    b.style.fontWeight = "100";
    c.style.fontWeight = "100";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.UX') == false) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
}

function onlyCode() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "100";
    b.style.fontWeight = "900";
    b.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    b.style.backgroundColor = "white";
    c.style.fontWeight = "100";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Code') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}

function onlyWriting() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    a.style.fontWeight = "100";
    b.style.fontWeight = "100";
    c.style.fontWeight = "900";
    c.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    c.style.backgroundColor = "white";
    d.style.fontWeight = "100";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Writing') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}

function onlyArt() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var x = document.getElementsByClassName("container");
    var a = document.getElementById("ux");
    var b = document.getElementById("code");
    var c = document.getElementById("writing");
    var d = document.getElementById("art");
    a.style.color = "white";
    b.style.color = "white";
    c.style.color = "white";
    d.style.color = "white";
    a.style.fontWeight = "100";
    b.style.fontWeight = "100";
    c.style.fontWeight = "100";
    d.style.fontWeight = "900";
    d.style.color = "blue";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    d.style.backgroundColor = "black";
    d.style.backgroundColor = "white";
    for (var i = 0; i < x.length; i++) {
      if (x[i].matches('.Art') == false) {
        x[i].style.display = "none";
      } else {
          x[i].style.display = "block";
      }
    }
}


export default Projects;
