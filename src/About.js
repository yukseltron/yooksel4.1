import React, { Component } from "react";
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
        <div class='about-body fade-in animate_animated animate__fadeInUpBig'>
        <br />
        <br />
        <br />
        <br />
            <h1>Hey,</h1>
        	<h2>
        	Looks like you want to get to know me better!
        	</h2>
            <h3>
            I'm just a human being somewhere in Canada.<br/>Probably working on hobbies or projects.
            </h3>
            <h4>Originally, I studied computer science, but I also taught myself how to use design tools in my spare time. Currently, I'm doing a masters where I can learn more about design (and also data science).</h4>
            <h4>That being said, I still enjoy programming and try to learn new tools. This website you're on for example I built using React for the first time. But for now, I'm focusing on further developing a career in design.</h4>
            <h4>
            Professionally, I've worked as a UX Designer, Web developer, and Graphic Designer. Currently I'm looking for new challenging UX work.
            </h4>
            <h4>
            In my spare time, I enjoy doing things like doodling or reading about history. En plus, je puis parler en Francais car je vivais au Montreal quand j'étais un petit enfant.
            </h4>
        	<Link class="link" to="/contact">
        	Feel free to reach out to me!</Link>
        	<br />
        	<br />
        	<a class="inline-a link" target="_blank" href="https://drive.google.com/file/d/1H-tHPjIP5dlZl9QtXDgoibdMZKjLbyDJ/view?usp=sharing">
        		Here is my resume in PDF.
        	</a>
        	<br />
        	<br />
        	<br />
        	<br />
            <br />
            <br />
            <br />
            <br />
            <label class="label">
            <p id="toggle-p">Click me</p>
              <div class="toggle">
                <input class="toggle-state" onClick={this.onToggle} type="checkbox" name="check" value="check" id="skill-type"/>
                <div class="indicator"></div>
              </div>
            </label>
        	<h3 id="skills">UX Skills</h3>
            <div class="skills top-border" id="ux-skills">
                <div>
                    <h2>Designs with</h2>
                    <ul>
                        <li>Research & Data Analytics</li>
                        <li>Information Architecture</li>
                        <li>Wireframing & Prototyping</li>
                        <li>Visual Communication</li>
                        <li>Collaboration</li>
                        <li>Empathy</li>
                    </ul>
                </div>
                <div>
                    <h2>Methods used</h2>
                    <ul>
                        <li>Card Sorting</li>
                        <li>Tree Testing</li>
                        <li>Surveys</li>
                        <li>Interviews</li>
                        <li>Usability Testing</li>
                    </ul>
                </div>
                <div>
                    <h2>Designs using</h2>
                    <ul>
                        <li>Figma</li>
                        <li>illustrator</li>
                        <li>Photoshop</li>
                        <li>XD</li>
                    </ul>
                </div>
            </div>
            <div class="skills top-border" id="cs-skills">
                <div>
                    <h2>Codes using</h2>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Java</li>
                        <li>Git</li>
                        <li>Bash</li>
                    </ul>
                </div>
                <div>
                    <h2>Is learning</h2>
                    <ul>
                        <li>Haskell</li>
                        <li>Swift</li>
                    </ul>
                </div>
                <div>
                    <h2>Can use</h2>
                    <ul>
                        <li>SQL</li>
                        <li>Elm</li>
                        <li>C</li>
                        <li>NASM Assembly</li>
                    </ul>
                </div>
            </div>
        	<br />
        	<br />
            <br />
        	<br />
        	<h3>Education</h3>
        	<div class="education top-border">
        		<div>
                    <div>
                        <h2>UX Design and Human-Centred Data Science</h2>
                        <h4>Masters of Information</h4>
                        <p>@ University of Toronto, St George</p>
                        <p>2022</p>
                    </div>
                    <br/>
                    <br/>
                    <div class="top-border-dashed">
                        <h2>Computer Science</h2>
                        <h4>Bachelors of Applied Science</h4>
                        <p>@ McMaster University</p>
                        <p>2020</p>
                    </div>
        		</div>
        	</div>
            <br />
        	<br />
            <br />
        	<br />
        	<h3>Experience</h3>
        	<div class="top-border">
              <h2>UX Designer & Developer</h2>
              <h4>@ CaseWare</h4>
        	  <p>Toronto ON</p>
              <p>May 2018-2019</p>
        	</div>
            <br/>
            <br/>
        	<div class="top-border-dashed">
                <h2>Web Developer & Graphic Designer</h2>
                <h4>@ McMaster SSC</h4>
                <p>Hamilton ON</p>
                <p>Summer 2017</p>
        	</div>
            <br/>
            <br/>
        	<div class="top-border-dashed">
                <h2>Software Design Engineer Intern</h2>
                <h4>@ Concur</h4>
                <p>Seattle WA</p>
                <p>Summer 2016</p>
        	</div>
        	<br />
        	<br />
            <br />
            <br />
        	<h3>Activities</h3>
        	<div class="top-border">
                <h2>Design Lead</h2>
                <h4>@ DeltaHacks</h4>
                <p>Jan 2016 - May 2017</p>
        	</div>
        		<br />
                <br/>
        	<div class="top-border-dashed">
                <h2>Dev Mentor</h2>
                <h4>@ NameCheap</h4>
                <p>Feb 2016-Jan 2017</p>
        	</div>
        		<br />
                <br/>
        	<div class="top-border-dashed">
                <h2>Instructor</h2>
                <h4>@ Mac Outreach</h4>
                <p>Sep 2015-2016</p>
        	</div>
        </div>


    );
  }
}

export default About;
