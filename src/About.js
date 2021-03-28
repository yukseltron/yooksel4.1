import React, { Component } from "react";
import {Slide, Fade, LightSpeed} from 'react-reveal';
import './about.css';
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";

function onToggle() {
  var x = document.getElementById("skill-type").checked;
  if (x == true) {
      document.getElementById("skills").innerHTML = 'Coding Skills';
      document.getElementById("cs-skills").style.display = 'flex';
      document.getElementById("ux-skills").style.display = 'none';
  } else {
      document.getElementById("skills").innerHTML = 'UX Skills';
      document.getElementById("ux-skills").style.display = 'flex';
      document.getElementById("cs-skills").style.display = 'none';
  }
}


class About extends Component {
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

    onToggle() {
      var x = document.getElementById("skill-type").checked;
      if (x == true) {
          document.getElementById("skills").innerHTML = 'Coding Skills';
          document.getElementById("cs-skills").style.display = 'flex';
          document.getElementById("ux-skills").style.display = 'none';
      } else {
          document.getElementById("skills").innerHTML = 'UX Skills';
          document.getElementById("ux-skills").style.display = 'flex';
          document.getElementById("cs-skills").style.display = 'none';
      }
    }


  render() {
    return (
        <div class='about-body fade-in'>
            <div class="center-content">
                <Fade bottom cascade>
                <div>
                <h1 ref={this.myDivToFocus}>Hey,</h1>
            	<h2>
            	Looks like you want to get to know me better!
            	</h2>
                </div>
                </Fade>
                <Fade bottom>
                <div>
                <h3>
                I'm just a human being somewhere in Canada.<br/>Probably working on hobbies or projects.
                </h3>
                </div>
                </Fade>
                <Slide bottom>
                <h4>Originally, I studied computer science, but I also taught myself how to use design tools in my spare time. Currently, I'm doing a masters where I can learn more about design (and also data science).</h4>
                <h4>That being said, I still enjoy programming and try to learn new tools. This website you're on for example I built using React for the first time. But for now, I'm focusing on further developing a career in design.</h4>
                <h4>
                Professionally, I've worked as a UX Designer, Web developer, and Graphic Designer. Currently I'm looking for new challenging UX work.
                </h4>
                <h4>
                In my spare time, I enjoy doing things like doodling or reading about history. En plus, je puis parler en Francais car je vivais au Montreal quand j'étais un petit enfant.
                </h4>
                </Slide>
                <Slide right>
                <Link class="link" to="/contact">
                Feel free to reach out to me!</Link>
                </Slide>
                <br />
                <br />
                <Slide left>
                <div>
                <a class="inline-a link" target="_blank" href="https://drive.google.com/file/d/1H-tHPjIP5dlZl9QtXDgoibdMZKjLbyDJ/view?usp=sharing">
                    Here is my resume in PDF.
                </a>
                </div>
                </Slide>
            </div>
        	<br />
        	<br />
        	<br />
        	<br />
            <br />
            <br />
            <br />
            <br />
            <div class="center-content-wide">
                <Slide bottom>
                <div>
                <label class="label">
                <p id="toggle-p">Switch skills</p>
                  <div class="toggle">
                    <input class="toggle-state" onClick={this.onToggle} type="checkbox" name="check" value="check" id="skill-type"/>
                    <div class="indicator"></div>
                  </div>
                </label>
                </div>
                </Slide>
                <Slide bottom>
            	<h3 id="skills">UX Skills</h3>
                </Slide>
                <div class="skills top-border" id="ux-skills">
                    <Slide bottom>
                    <div>
                        <h2>Designs with</h2>
                        <ul>
                            <li>User Research</li>
                            <li>Information Architecture</li>
                            <li>Wireframing & Prototyping</li>
                            <li>Visual Communication</li>
                            <li>Collaboration</li>
                            <li>Data Analytics</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                        <h2>Methods used</h2>
                        <ul>
                            <li>Iterative Design</li>
                            <li>Card Sorting</li>
                            <li>Tree Testing</li>
                            <li>Surveys</li>
                            <li>Interviews</li>
                            <li>Usability Testing</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                        <h2>Designs using</h2>
                        <ul>
                            <li>Figma</li>
                            <li>illustrator</li>
                            <li>Photoshop</li>
                            <li>XD</li>
                        </ul>
                    </div>
                    </Slide>
                </div>
                <div class="skills top-border" id="cs-skills">
                    <Slide bottom>
                    <div>
                        <h2>Codes using</h2>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Git</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                        <h2>Is learning</h2>
                        <ul>
                            <li>Haskell</li>
                            <li>Swift</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                        <h2>Can use</h2>
                        <ul>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Elm</li>
                            <li>C</li>
                            <li>NASM Assembly</li>
                        </ul>
                    </div>
                    </Slide>
                </div>
            </div>
        	<br />
        	<br />
            <br />
        	<br />
            <div class="center-content">
                <Slide bottom>
            	<h3>Education</h3>
                </Slide>
            	<div class="education top-border">
            		<div>
                        <Slide bottom>
                        <div>
                            <h2>UX Design and Human-Centred Data Science</h2>
                            <h4>Masters of Information</h4>
                            <p>@ University of Toronto, St George</p>
                            <p>2022</p>
                        </div>
                        </Slide>
                        <br/>
                        <br/>
                        <Slide bottom>
                        <div class="top-border-dashed">
                            <h2>Computer Science</h2>
                            <h4>Bachelors of Applied Science</h4>
                            <p>@ McMaster University</p>
                            <p>2020</p>
                        </div>
                        </Slide>
            		</div>
            	</div>
            </div>
            <br />
        	<br />
            <br />
        	<br />
            <div class="center-content">
                <Slide bottom>
            	<h3>Experience</h3>
                </Slide>
                <Slide bottom>
            	<div class="top-border">
                  <h2>UX Designer & Developer</h2>
                  <h4>@ CaseWare</h4>
                  <p>Toronto ON</p>
                  <p>May 2018-2019</p>
                  <h3 class="h3-para">Helped make NOVA, the internal design system used across CaseWare products. Contributed to designing and developing the NOVA UI library, the NOVA site,
    its style guides, 40+ icons, and illustrations to help communicate to developers.</h3>
                 <p>Tools: User Interviews, Angular, HTM/CSS, Illustrator, XD</p>
            	</div>
                </Slide>
                <br/>
                <br/>
                <Slide bottom>
            	<div class="top-border-dashed">
                    <h2>Web Developer & Graphic Designer</h2>
                    <h4>@ McMaster SSC</h4>
                    <p>Hamilton ON</p>
                    <p>Summer 2017</p>
                    <h3 class="h3-para">Worked on a risk assessment app for students hosting events at the university. Designed the form and contributed to the risk assessment algorithm. Also made visual designs for the branding on various different SSC websites.</h3>
                    <p>Tools: Vue.js, HTML, CSS, Photoshop</p>
            	</div>
                </Slide>
                <br/>
                <br/>
                <Slide bottom>
            	<div class="top-border-dashed">
                    <h2>Software Design Engineer Intern</h2>
                    <h4>@ Concur</h4>
                    <p>Seattle WA</p>
                    <p>Summer 2016</p>
                    <h3 class="h3-para">Collaborated on a multithreading solution to optimize database search time from ~8hrs to ~30min. Built
    a web app to dynamically show all the search query metrics and outcomes in real time and in an organized manner with customization options.</h3>
                    <p>Tools: Java, JQuery, HTML, CSS, Spring, SQL</p>
            	</div>
                </Slide>
            </div>
        	<br />
        	<br />
            <br />
            <br />
            <div class="center-content">
                <Slide bottom>
            	<h3>Activities</h3>
                </Slide>
                <Slide bottom>
            	<div class="top-border">
                    <h2>Design Lead</h2>
                    <h4>@ DeltaHacks</h4>
                    <p>Jan 2016 - May 2017</p>
                    <h3 class="h3-para">Designed and led the team behind the main visual styles and branding of DeltaHacks III, a hackathon.</h3>
            	</div>
                </Slide>
            		<br />
                    <br/>
                <Slide bottom>
            	<div class="top-border-dashed">
                    <h2>Dev Mentor</h2>
                    <h4>@ NameCheap</h4>
                    <p>Feb 2016-Jan 2017</p>
                    <h3 class="h3-para">Mentored for programming and design to students at hackathons across North America.</h3>
            	</div>
                </Slide>
            		<br />
                    <br/>
                <Slide bottom>
            	<div class="top-border-dashed">
                    <h2>Instructor</h2>
                    <h4>@ Mac Outreach</h4>
                    <p>Sep 2015-2016</p>
                    <h3 class="h3-para">Helped teach 1000+ elementary students recursion and functional programming basics using ELM.</h3>
            	</div>
                </Slide>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 class="p-center"><a class="return" onClick={this.handleOnClick}>Return to top</a></h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="section-1 center-content">
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom cascade>
                <p>Still want more?</p>
                </Fade>
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom cascade>
                <p> Keep scrolling for some fun stuff</p>
                </Fade>
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div class="center-content">
                <Fade bottom>
                <div>
                <h3>Fun stuff</h3>
                <h2>Album of the moment</h2>
                <iframe src="https://open.spotify.com/embed/album/49MNmJhZQewjt06rpwp6QR" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <br />
                <br/>
                <h2>Film of the moment</h2>
                <iframe src="https://www.youtube.com/embed/2HkjrJ6IK5E?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                </Fade>
            </div>
            <h2 class="p-center"><a class="return" onClick={this.handleOnClick}>Return to top</a></h2>
        </div>


    );
  }
}

export default About;
