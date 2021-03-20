import LazyLoad from 'react-lazyload';
import './projects-style.css';
import frontIMG from './proj-fronts/marqet2-front.png';
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


class Marqet extends Component {
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
                <title>Marqet</title>
          <h1 ref={this.myDivToFocus}>Marqet</h1>
          <h4 class="p-center">2021</h4>
          <h4 class="subtitle">Find art authenticated on a blockchain</h4>
          <div>
		  <img  loading="lazy" src={frontIMG}/>
          <p class="p-center">Still a work in progress!</p>
          </div>
          <br/>
          <br/>
          <div ref={this.div1}>
              <h3>Background</h3>
              <div class="center-content">
                 <p>Art Marqet is a hypothetical app that helps users showcase and browse for art authenticated on a blockchain as a <a target="_blank" href="https://en.wikipedia.org/wiki/Non-fungible_token">Non-Fungible Token.</a></p>
                <p>Check back soon for more progress!</p>
              </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

    );
  }
}

export default Marqet;
