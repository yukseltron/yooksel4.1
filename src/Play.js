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
import {Slide, Fade, LightSpeed} from 'react-reveal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import UVCatastrophe from "./UVCatastrophe";
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



let uvc = new Proj('UVC', 'Album Artwork', '2018',
'Graphic design', 'Art', uvcIMG, '/uvc');



projs[0] = uvc;
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



class Play extends Component {
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
                    </div>
                    <p class="date">{i.year}</p>
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

export default Play;
