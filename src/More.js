import LazyLoad from 'react-lazyload';
import './projects-style.css';
import rsgIMG from './project-svgs/rsg.svg';
import vabIMG from './project-svgs/vrbot.svg';
import monodriftIMG from './project-svgs/monodrift.svg';
import uvcIMG from './project-svgs/uvc.svg';
import jpIMG from './project-svgs/jp.svg';
import ehoroIMG from './project-svgs/ehoro.svg';
import uxstuffIMG from './project-svgs/uxstuff.svg';
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


let rsg = new Proj('Random String Generator', 'Python Grammar Compiler', '2020',
'Programming, Computer Science', 'Code', rsgIMG, '/random-string-generator');

let vab = new Proj('Virtual Assistance Bot', 'Unity VR Capstone', '2020',
'Project Management, Programming', 'Code', vabIMG, '/virtual-assistance-bot');

let monodrift = new Proj('Mono Drift', 'Vue.js Website', '2019',
'Writing, Programming', 'Writing', monodriftIMG, '/mono-drift');

let uvc = new Proj('UVC', 'Album Artwork', '2018',
'Graphic design.', 'Art', uvcIMG, '/uvc');

let jp = new Proj('The Josephus Problem', 'Angular Web App', '2017',
'Programming, Visualization', 'Code', jpIMG, '/jp');

let emojihoroscope = new Proj('Emoji Horoscope', 'Django Web App', '2018',
'Programming, APIs', 'Code', ehoroIMG, '/emojihoroscope');

let uxstuff = new Proj('UX Design', 'All my UX related work', '',
'Check them out', 'UX', uxstuffIMG, '/projects');


projs[0] = rsg;
projs[1] = vab;
projs[2] = monodrift;
projs[3] = uvc;
projs[4] = emojihoroscope
projs[5] = jp;
//projs[6] = Intro to Comp poster
//projs[7] = Flora
//projs[8] = ELM slash bit fiction
//projs[9] = bubble-tea finder
//projs[10] = film posters
//projs[11] = Walleto Market;
//projs[12] = abstract icons
//projs[13] = Will DangXHamid
//projs[14] = incite art submissions
//projs[15] = short stories
//projs[16] = Amazon Drone Delivery
//projs[17] = Playboy art Project
//projs[18] = Human fertility predictor
//projs[19] = Scripts
//projs[20] = photography
//projs[21] = bitcoin trader
//projs[22] = bartxhamid project
//projs[23] = Plant painting
//projs[23] = Pat rice posters



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
                                <p class="description">{i.description}</p>
                            </div>
                            <div class="img-container">
                                <img className={styles.animate__animated, styles.animate__fadeInDown} src={i.img}/>
                            </div>
                            <p class="date">{i.year}</p>
                    </div>
                </Link>
        )
      }
    return (
		<div ref={this.myRef} class="projects-container">
        <LazyLoad placeholder={<img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"/>}>
        <br/>
        <br/>
            <h4 class="p-center" ref={this.myDivToFocus}>My programming, writing, and graphic design work. <Link class="h-link" to="/projects">Want my UX stuff?</Link></h4>
			<div class="fade-in" id="projects">
				{items}
                <Link to="/projects">
                    <div class="container">
                        <div class="img-container">
                            <img loading="lazy" src={uxstuffIMG}/>
                        </div>
                        <div class="info">
                            <h1>UX Designs</h1>
                            <h3>All my UX related work</h3>
                            <p class="description">Check them out.</p>
                        </div>
                    </div>
                </Link>
			</div>
            <h2 class="p-center link-top spacer"><a onClick={this.handleOnClick}>Return to top</a></h2>
        </LazyLoad>
		</div>
    );
  }
}

export default More;
