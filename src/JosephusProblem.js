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


class JosephusProblem extends Component {
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
          <h1 ref={this.myDivToFocus}>The Josephus Problem</h1>
          <h4 class="p-center">2017</h4>
          <h4 class="subtitle">A visualization of the infamous puzzle</h4>
          <div>
          <img loading="lazy" class="front-img" src={frontIMG}/>
          <p class="p-center">Built with Angular and TypeScript</p>
          </div>
          <br/>
          <div ref={this.div1}>
              <h3>Background</h3>
              <div class="center-content">
                <p>Imagine there's (N) of you captured as prisoners. As enemies of the kingdom, you are all arranged in a circle, and are told that starting from person 1, every Kth prisoner will be killed. K being some arbitrarily chosen interval. Luckily for you, you're the one who chooses. What K value do you pick, given N number of people, so that you remain as the last person alive?</p>
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

export default JosephusProblem;
