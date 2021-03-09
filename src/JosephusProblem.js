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
          <h4 class="subtitle">A visual solution for the famous math problem</h4>
          <div class="spacer">
          <img/>
          </div>
          <br/>
          <br/>
          <p class="border-bottom border-top spacer">
              <h4 class="p-center"><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
          </p>
          <br/>
          <div class="spacer" ref={this.div1}>
              <h3>Background</h3>
              <p class="p-center spacer">Cryptocurrencies and applications with blockchain technologies are growing and so are the need for online tools and uses for crypto.</p>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
    );
  }
}

export default JosephusProblem;
