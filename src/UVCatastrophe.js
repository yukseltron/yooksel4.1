import './projects-style.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';


class UVCatastrophe extends Component {
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
    return (
        <div class="fade-in project">
          <h1 ref={this.myDivToFocus}>UltraViolet Catastrophe</h1>
          <h4 class="p-center">2018</h4>
          <h4 class="subtitle">Band Art and Branding</h4>
          <div class="border-bottom spacer">
          <img src="https://i.imgur.com/57z5Kg0.png"/>
          </div>
          <br/>
          <div class="background-info">
              <div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>Topic</h2>
                          <p>Music</p>
                      </div>
                      <div>
                          <h2>Tools Used</h2>
                          <p>Adobe PhotoShop<br/>Adobe illustrator</p>
                      </div>
                  </div>
                  <div class="background-info">
                      <h4>For: UltraViolet Catastrophe (UVC)</h4>
                      <h4>Platform: Branding and Cover Art</h4>
                      <h4>Nov 2018 - 2018</h4>
                  </div>
                  <br/>
              </div>
              <br/>
          </div>
          <br/>
          <p class="border-bottom border-top spacer">
              <h4 class="p-center"><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
          </p>
          <br/>
          <div class="border-bottom spacer" ref={this.div1}>
              <h3>Overview</h3>
              <div class="center-content">
                <p>These are cover art and brand designs I made for the band UltraViolet Catastrophe. Inspiration for this project came from the band members friendships. While also providing a theme of physics and computation, reflective of the band member's fields. Some of these I gave a motion effect, a little extra thing only available online. It was intended for a music video.</p>
              </div>
              <p class="p-center"></p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
             </div>
          <div>
              <br/>
              <div class="spacer final-design-section">
                  <h3>Designs</h3>
                  <p class="p-center">Below are some designs and concept designs made in total for UVC.</p>
              </div>
              <h2 class="p-center">Logo Design</h2>
              <img class="spacer" src="https://i.imgur.com/Osty1P9.png"/>
              <h2>Concept Designs</h2>
              <img class="spacer" src="https://i.imgur.com/8NPwbTt.png"/>
              <h2>401 - EP Cover Art</h2>
              <img class="spacer" src="https://i.imgur.com/57z5Kg0.png"/>
              <h2>401 - EP DELUXE Cover Art</h2>
              <img class="spacer" src="https://i.imgur.com/XgUVMrt.png"/>
              <h2>Scarlet - Single Cover Art</h2>
              <img class="spacer" src="https://i.imgur.com/qEY42iC.gif"/>
              <h2>Mountains - Single Cover Art</h2>
              <img class="spacer" src="https://i.imgur.com/DbgSYLH.gif"/>
              <br/>
              <br/>
              <br/>
              <h2 class="spacer"><a onClick={this.handleOnClick}>Return to top</a></h2>
        </div>
    </div>
    );
  }
}

export default UVCatastrophe;
