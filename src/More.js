import './projects-style.css';
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/uvc.svg';
import jpIMG from './project-svgs/jp.svg';
import ehoroIMG from './project-svgs/ehoro.svg';
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
import EmojiHoroscope from "./EmojiHoroscope";
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

let jp = new Proj('The Josephus Problem', 'Web App', '2017',
'A visualization of the math puzzle solution.', 'Code', jpIMG, '/jp');

let emojihoroscope = new Proj('Emoji Horoscope', 'Web App', '2018',
'See your horoscope in emoji form.', 'Code', ehoroIMG, '/emojihoroscope');


projs[0] = rsg;
projs[1] = vab;
projs[2] = monodrift;
projs[3] = uvc;
projs[4] = emojihoroscope
projs[5] = jp;

class More extends Component {
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
            <h4 ref={this.myDivToFocus}>My programming, writing, and graphic design work. <Link class="h-link" to="/projects">Want my UX stuff?</Link></h4>
			<div class="fade-in" id="projects">
				{items}
			</div>
            <h2 class="p-center link-top spacer"><a onClick={this.handleOnClick}>Return to top</a></h2>
		</div>
    );
  }
}

export default More;
