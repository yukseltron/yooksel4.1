import './projects-style.css';
import frontIMG from './proj-fronts/eh-front.svg';
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


class EmojiHoroscope extends Component {
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
          <h1 ref={this.myDivToFocus}>Emoji Horoscope</h1>
          <h4 class="p-center">2018</h4>
          <h4 class="subtitle">See your future through emojis</h4>
          <div>
          <img  loading="lazy" class="front-img" src={frontIMG}/>
          <p class="p-center">Built with Python and Django</p>
          </div>
          <br/>
          <div ref={this.div1}>
              <h3>Background</h3>
              <div class="center-content">
                <p>This was a simple project utilizing a horoscope API in combination with a sentiment analysis API. Feeding the horoscope text into the sentiment analysis API gave a value that could be mapped to an emoji.</p>
              </div>
          </div>
          <br/>
          <br/>
          <p class="border-bottom border-top">
              <h4 class="p-center"><a target="_blank" href="https://emoji-horoscope.appspot.com/">View website</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://github.com/yukseltron/emoji-horoscope">View source code</a></h4>
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

export default EmojiHoroscope;
