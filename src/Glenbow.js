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


class Glenbow extends Component {
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
          <h1 ref={this.myDivToFocus}>Changing Glenbow</h1>
          <h4 class="p-center">2020</h4>
          <h4 class="subtitle">Information Architecture Redesign</h4>
          <div class="border-bottom spacer">

          </div>
          <br/>
          <div class="background-info spacer">
  			<div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>In collaboration with</h2>
                          <p>
                              <a href="mailto:mikella.seth@mail.utoronto.ca">Rakan</a>, <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Paniz</a>, and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Hadis</a>.
                          </p>
                      </div>
                      <div>
                          <h2>My role</h2>
                          <p>UI designer<br/>Tree-test Maker<br/>Card Sort test Maker<br/>Graphic Designer<br/>Sketcher</p>
                      </div>
                      <br/>
                      <div>
                          <h2>Tools Used</h2>
                          <p>Figma<br/>Adobe XD<br/>OnPoint Content Auditor<br/>Optimal Workshop</p>
                      </div>
                  </div>
  				<br/>
                  <div class="background-info">
                      <h4>For: Glenbow Museum<br/>(Hypothetical)</h4>
                      <h4>Platform: Web</h4>
                      <h4>Sep-Dec 2020</h4>
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
              <div class="circlebox">
                  <div class="div1 filled"></div>
                  <div class="div2"></div>
                  <div class="div3"></div>
                  <div class="div4"></div>
                  <div class="div5"></div>
              </div>
              <h3>Overview</h3>
              <p class="p-center">Cryptocurrencies and applications with blockchain technologies are growing and so are the need for online tools and uses for crypto.</p>
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
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <img/>
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
          <div class="border-bottom section spacer" ref={this.div2}>
              <div class="circlebox">
                  <div class="div1"></div>
                  <div class="div2 filled"></div>
                  <div class="div3"></div>
                  <div class="div4"></div>
                  <div class="div5"></div>
              </div>
              <div class="spacer">
                  <h3>Research</h3>
                  <br/>
                  <br/>
                  <h2>Content Audit</h2>
                  <p class="p-center"></p>
                  <img/>
                  <p class="p-center"></p>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div class="spacer">
                  <h2>Tree testing/Card Sort studies</h2>
                  <br/>
                  <div class="horizontal-section">
                      <p>Afterwards, we created journey maps to connect with our users, see how their process works, and outline pain points and areas of opportunities.<br/><br/>This journey map is for a scenario where our user prepares for a lecture and assignments.</p>
                      <img />
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
          </div>
          <div class="border-bottom section spacer" ref={this.div3}>
              <div class="circlebox">
              <div class="div1"></div>
              <div class="div2"></div>
              <div class="div3 filled"></div>
              <div class="div4"></div>
              <div class="div5"></div>
              </div>
              <div class="spacer">
                  <h3>Ideation</h3>
                  <h2>The new IA</h2>
                  <p class="p-center">Some of the ideas that could work for this project.</p>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div class="spacer">
                  <h2>Sketches</h2>
                  <br/>
                  <p class="p-center">Testing out some ways to implement the ideas through sketches:</p>
                  <img/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
          <div class="circlebox" ref={this.div4}>
              <div class="div1"></div>
              <div class="div2"></div>
              <div class="div3"></div>
              <div class="div4 filled"></div>
              <div class="div5"></div>
          </div>
          <div class="border-bottom section spacer">
          <br/>
              <div class="spacer">
                  <h3>Prototyping</h3>
                  <h2>Midfi</h2>
                  <p class="p-center">Using the sketches, I made some midfi screens to better test out the ideas.</p>
                  <img/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div class="spacer">
                  <h2>User Scenarios</h2>
                  <br/>
                  <div>
                      <div class="horizontal-section scenario-section border-bottom">
                          <p>This scenario depicts how our user Allie could prepare for an assignment. She's shown which assignment needs the most attention, and can instantly find the lectures relevant to it. As well, she can view the lecture in different formats to her liking.</p>
                          <img/>
                      </div>
                      <br/>
                      <br/>
                      <div class="horizontal-section scenario-section border-bottom">
                          <p>Here, Allie needs to find a teammate to work with. She has the option to do a group search, see which classmates she's worked with before, and view the classmate's contact info. Past group details are also available to be seen.</p>
                          <img/>
                      </div>
                      <br/>
                      <br/>
                      <div class="horizontal-section scenario-section border-bottom">
                          <p>In this scenario, we see how Allie can connect to classmates as friends by exploring and joining interest groups for a course. This way, Allie can find ways to bond online.</p>
                          <img/>
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
          </div>
              <div class="circlebox" ref={this.div5}>
                  <div class="div1" onClick={this.div1}></div>
                  <div class="div2" onClick={this.div2}></div>
                  <div class="div3" onClick={this.div3}></div>
                  <div class="div4" onClick={this.div4}></div>
                  <div class="div5 filled"></div>
              </div>
              <br/>
              <div class="spacer final-design-section">
                  <h3>Final Design</h3>
                  <img/>
                  <p class="p-center">Working off of feedback on the midfi, I designed this hi-fidelity prototype.</p>
                  <p class="p-center">The main user flow interactions are shown below.</p>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div class="spacer">
                  <div class="horizontal-section">
                      <div>
                          <h2 class="p-left">Content Connections</h2>
                          <h4 class="storyboard-h4">Quickly find the right lectures to help with assignments</h4>
                      </div>
                      <img class="subtle-shadow"/>
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
                  <br/>
                  <div class="horizontal-section">
                      <div>
                          <h2 class="p-left">Finding Groupmates</h2>
                          <h4 class="storyboard-h4">Make teams without a sweat and see who you've worked with before</h4>
                      </div>
                      <img class="subtle-shadow"/>
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
                  <br/>
                  <div class="horizontal-section">
                      <div>
                          <h2 class="p-left">idea</h2>
                          <h4 class="storyboard-h4">Find and bond with classmates over your shared interests</h4>
                      </div>
                      <img class="subtle-shadow"/>
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

export default Glenbow;
