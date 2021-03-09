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
            I'm just a human being in Toronto, Canada. Probably working on hobbies or projects.
            </h3>
            <h4>
            Professionally, I have worked as a UX designer, Web developer, and Graphic designer. Currently I'm looking for challenging UX work.
            </h4>
            <h4>
            Although no longer working in software, I still code as a hobby and use this experience to suppliment my UX skills.
            </h4>
            <h4>
            In my spare time, you'll find me learning more about creatively applying machine learning and data analytics in new ways. That, or just doodling and reading about history.
            </h4>
        	<Link class="link" to="/contact">
        	Feel free to reach out to me!</Link>
        	<br />
        	<br />
        	<a class="inline-a link" target="_blank" href="https://drive.google.com/file/d/1uxdbQeUstEunqsq15n86ddOl0Obe-tPp/view?usp=sharing">
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
        			<h2>Masters of Information / UX Design, Data Science @ University of Toronto, St George / 2022</h2>
        			<h2>Bachelors of Applied Science / Computer Science @ McMaster University / 2020</h2>
        		</div>
        	</div>
            <br />
        	<br />
            <br />
        	<br />
        	<h3>Experience</h3>
        	<div class="top-border"></div>
        	<div>
        	  <h2>UX Designer & Developer / CaseWare /  Toronto ON / May 2018-2019</h2>
        	</div>
        	<div class="top-border-dashed">
        	  <h2>Junior Web Dev & Graphic Designer / McMaster SSC / Hamilton ON / Summer 2017</h2>
        	</div>
        	<div class="top-border-dashed">
        	  <h2>Software Design Engineer Intern / Concur / Seattle WA / Summer 2016</h2>
        	</div>
        	<br />
        	<br />
            <br />
            <br />
        	<h3>Activities</h3>
        	<div class="top-border">
        	  <h2>Design Lead / DeltaHacks / Jan 2016-May 2017</h2>
        	</div>
        		<br />
        	<div class="top-border-dashed">
        	  <h2>Dev Mentor / NameCheap / Feb 2016-Jan 2017</h2>
        	</div>
        		<br />
        	<div class="top-border-dashed">
        	  <h2>Instructor / Mac Outreach / Sep 2015-2016</h2>
        	</div>
        </div>


    );
  }
}

export default About;
