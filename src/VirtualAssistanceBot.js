import './projects-style.css';
import Footer from './Footer';
import frontIMG from './proj-fronts/vb-front.svg';
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


class VirtualAssistanceBot extends Component {
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
          <h1 ref={this.myDivToFocus}>Virtual Assistance Bot</h1>
          <h4 class="p-center">2020</h4>
          <h4 class="subtitle">Guiding people in VR experiments with configurable bots</h4>
          <div class="border-bottom">
          <img loading="lazy" class="spacer" src={frontIMG}/>
          </div>
          <div class="background-info">
  			<div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>In collaboration with</h2>
                          <p>
                              <a href="https://github.com/tonyxmella66">Anthony Mella</a>,<br/><a href="https://github.com/JPawlikowski">Jakub Pawlikowski</a>,<br/> and <a href="https://github.com/Philipsty">Tyler Phillips</a>.
                          </p>
                      </div>
                      <div>
                          <h2>My role</h2>
                          <p>Project Manager<br/>Web Developer<br/>Video Editor</p>
                      </div>
                      <br/>
                      <div>
                          <h2>Tools Used</h2>
                          <p>Agile development<br/>Unity<br/>Vue.js<br/>HTML/CSS</p>
                      </div>
                  </div>
  				<br/>
                  <div class="background-info">
                      <h4>For: McMaster Decision Science Laboratory (McDSL)</h4>
                      <h4>Platform: Virtual Reality</h4>
                      <h4>Sep 2019-April 2020</h4>
                  </div>
                  <br/>
  			</div>
              <br/>
  		</div>
        <br/>
        <p class="border-bottom border-top spacer">
            <h4 class="p-center"><a target="_blank" href="https://github.com/tonyxmella66/Capstone2019">View VR bot source code on github</a></h4>
            <h4 class="p-center"><a target="_blank" href="https://github.com/yukseltron/bot-factory">View bot configurer source code on github</a></h4>
        </p>
        <br/>
        <div class="spacer" ref={this.div1}>
            <div class="center-content">
                <h3>Abstract</h3>
                <p>This was a capstone culmination project as part of our final year of computer science studies.</p>
                <p>For some background: <a target="_blank" href="https://mceel.mcmaster.ca/">The McMaster Desicion Sciences Laboratory (McDSL)</a> needed a bot to provide assistance to people inside of their human behaviour experiments using virtual reality.</p>
                <p>The researchers themselves didn't want to disrupt the experiment by intervening themselves.</p>
                <p>So we built for them a proof-of-concept assistance bot that waits and listens for help, and then offers appropriate advice.</p>
                <p>The researchers can add and edit what the bot should listen for and say, get data on the help provided, and customize the bot's appearance.</p>
            </div>
            <br/>
        </div>
        <div class="spacer ">
              <div class="center-content">
                <h3>My Contributions</h3>
                  <p> I was the project manager, creating and delegating tasks. I was responsible for the team's cohesiveness and ensuring our goals aligned. I also built the web app for creating and editing the bot configuration file.</p>
              </div>
        </div>
        <div class="spacer ">
              <div>
                <h3>Demo</h3>
                    <iframe src="https://www.youtube.com/embed/_-yhq2RHWto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
        </div>
        <div class="spacer">
          <div class="center-content">
                <h3>Reflection</h3>
                <p>The biggest difficulty faced was our limited hardware available and struggles with VR support. This made development slow as we found problems getting Unity VR games to run on suboptimal rigs. Luckily, McDSL supplied us with the hardware necessary to complete the project.</p>
                <p>Although the onset of COVID-19 made progress even more difficult, we were able to rally and successfully complete the project.</p>
          </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2><a onClick={this.handleOnClick}>Return to top</a></h2>
        </div>
        <Footer/>
        <br/>
        <br/>
        <br/>
        </div>
    );
  }
}

export default VirtualAssistanceBot;
