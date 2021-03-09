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
          <div class="border-bottom spacer">

          </div>
          <br/>
          <div class="background-info spacer">
  			<div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>In collaboration with</h2>
                          <p>
                              <a href="mailto:mikella.seth@mail.utoronto.ca">Anthony Mella</a>,<br/><a href="mailto:nhatanh.tranle@mail.utoronto.ca">Jakub Pawlikowski</a>,<br/> and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Tyler Phillips</a>.
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
                      <h4>For: McMaster Decision Science Laboratory</h4>
                      <h4>Platform: Unity</h4>
                      <h4>Sep 2019-April 2020</h4>
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
          <div class="spacer" ref={this.div1}>
              <div class="circlebox">
                  <div class="div1 filled"></div>
                  <div class="div2"></div>
                  <div class="div3"></div>
                  <div class="div4"></div>
                  <div class="div5"></div>
              </div>
              <h3>Overview</h3>
              <p class="p-center spacer">Cryptocurrencies and applications with blockchain technologies are growing and so are the need for online tools and uses for crypto.</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div>
                  <div>
                      <h2>The Challenge</h2>
                      <br/>
                      <div class="problem-section spacer">
                          <img/>
                          <div>
                              <p class="p-left">I wanted to try and focus on how crypto could be presented with real purposes online. As crypto has grown massively in popularity, markets have emerged that try to sell things through crypto. Of course, I found that more than just art, but also platforms for charity and video games exist on crypto. Overall however, this project's true purpose was about learning to prepare design specifications.</p>
                          </div>
                      </div>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <div class="needs-section spacer center-content">
                      <h2>The Needs</h2>
                      <div class="needs">
                          <h1>1.</h1>
                          <h4 class="h-left">Be able to assess accounts and see how crypto prices are affecting them.</h4>
                      </div>
                      <div class="needs">
                          <h1>2.</h1>
                          <h4 class="h-left">A way to quickly and easily send crypto between accounts or to people.</h4>
                      </div>
                      <div class="needs spacer">
                          <h1>3.</h1>
                          <h4 class="h-left">A way to explore a market to see what they can use spend their crypto on.</h4>
                      </div>
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div>
                  <h2>The Solution</h2>
                  <br/>
                  <div class="solution-sector spacer center-content">
                      <div class="solution-info">
                          <div>
                              <h4>Walleto is a crypto wallet that focuses on practicality. It shows the gains/losses in your accounts, allows for easy transfering to contacts, and includes a market showcasing all the things you can use your crypto for.</h4>
                          </div>
                      </div>
                      <img/>
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
          <div class="border-bottom spacer border-top">
                <div class="center-content">
                  <h3>My Contributions</h3>
                    <p>For the research phase, I was responsible for the survey questions and format. I contributed to the user analysis in making the persona and journey maps.</p>
                    <p>During ideation, I helped come up with ideas and organized our results on a prioritization grid. As well, I helped design our user scenarios.</p>
                    <p>In the design phase, I was responsible for making the Midfi and Hifi prototypes and the overall visual design.</p>
                </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
              <div class="spacer">
                  <h2>Reflection</h2>
                  <p>Looking back, although we managed to successfully focus on key ideas, there were some ideas we could no longer work on. Initially, course consistency was an important goal of ours. However, we learned of legal barriers that ensure professors have total freedom and modularity with their course design. This makes course consistency a very idealistic goal too dependent on legal matters.</p>
                  <p>While working on this project I was able to learn new features for Adobe XD (such as mapping a screen onto another screen), and get a better understanding of how to delegate tasks in a group UX project.</p>
                  <p>Overall, I'm proud of my team's work. We were shorthanded to begin with, but we all managed to get all our deliverables done on time.</p>
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
        </div>
    );
  }
}

export default VirtualAssistanceBot;
