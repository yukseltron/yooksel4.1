import './projects-style.css';
import frontIMG from './proj-fronts/md-front.svg';
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


class MonoDrift extends Component {
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
          <h1 ref={this.myDivToFocus}>Mono Drift</h1>
          <h4 class="p-center">2019</h4>
          <h4 class="subtitle">The singularity approaches</h4>
          <div>
          <img  loading="lazy" src={frontIMG}/>
          <p class="p-center">Built using Vue.js</p>
          </div>
          <br/>
          <br/>
          <div ref={this.div1}>
              <h3>Background</h3>
              <div class="center-content">
                <p>This was written over a period of time and is still missing some stories I haven't finished writing.</p>
                <p>"Roaring engines, driven ambitions, and mythical machines. Playing with reality comes with consequences. But what led to this moment? How did the breakthroughs all happen? These loosely connected stories may explain it all."</p>
              </div>
          </div>
          <br/>
          <br/>
          <p class="border-bottom border-top">
              <h4 class="p-center"><a target="_blank" href="https://mono-drift.netlify.app/">View Stories</a></h4>
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
    );
  }
}

export default MonoDrift;
