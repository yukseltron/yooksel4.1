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

          </div>
          <br/>
          <div class="background-info spacer">
              <div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>Topic</h2>
                          <p>Music</p>
                      </div>
                      <br/>
                      <div>
                          <h2>Tools Used</h2>
                          <p>Adobe PhotoShop<br/>Adobe illustrator</p>
                      </div>
                  </div>
                  <br/>
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
                  <h3>Background</h3>
                  <p>Exmaple of a crypto market:<a href="https://foundation.app/">foundation.app</a></p>
                  <p>Exmaple of blockchain collectibles:<a href="https://www.nbatopshot.com/">nbatopshot.com</a></p>
                  <br/>
                  <br/>
                  <h2>Mood Board</h2>
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
                  <h2>Concept Art</h2>
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
          <div>
              <div class="circlebox" ref={this.div5}>
                  <div class="div1" onClick={this.div1}></div>
                  <div class="div2" onClick={this.div2}></div>
                  <div class="div3" onClick={this.div3}></div>
                  <div class="div4" onClick={this.div4}></div>
                  <div class="div5 filled"></div>
              </div>
              <br/>
              <div class="spacer final-design-section">
                  <h3>Designs</h3>
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
                          <h2 class="p-left">401 - EP</h2>
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
                          <h2 class="p-left">Scarlet - Single</h2>
                          <h4 class="storyboard-h4">Find and bond with classmates over your shared interests</h4>
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
                          <h2 class="p-left">Mountains - Single</h2>
                          <h4 class="storyboard-h4">Find and bond with classmates over your shared interests</h4>
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
                          <h2 class="p-left">Secret's Out - Single</h2>
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
    </div>
    );
  }
}

export default UVCatastrophe;
