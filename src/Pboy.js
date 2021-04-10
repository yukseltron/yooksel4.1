import './projects-style.css';
import frontIMG from './proj-fronts/jp-front.svg';
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
import Footer from './Footer';


class Pboy extends Component {
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
          <h1 ref={this.myDivToFocus}>Playboy X000</h1>
          <h4 class="p-center">2021</h4>
          <h4 class="subtitle">From (a) future(?)</h4>
          <div>
          <img loading="lazy" class="front-img" src={frontIMG}/>
          <p class="p-center">Built with React</p>
          </div>
          <br/>
          <div ref={this.div1}>
              <h3>Background</h3>
              <div class="center-content">
                <p>This was an art project</p>
              </div>
          </div>
          <br/>
          <br/>
          <p class="border-bottom border-top">
              <h4 class="p-center"><a target="_blank" href="https://yukseltron.github.io/Josephus-Problem/">View website</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://github.com/yukseltron/Josephus-Problem">View source code</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://en.wikipedia.org/wiki/Josephus_problem">View more info on the problem</a></h4>
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Footer/>
          <br/>
          <br/>
          <br/>
        </div>
    );
  }
}

export default Pboy;
