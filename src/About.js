import React, { Component } from "react";
import './about.css';
import {
  Route,
  NavLink,
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
        	<p>
        	Is a curious human being who does design, coding, writing, art, etc.
        	</p>
            <p>
            I have worked professionally as a UX designer, Web developer, and Graphic designer. Currently looking for challenging UX work that can help me learn and grow.
            </p>
            <p>
            Although no longer working in software or graphic design, I still code as a hobby and use this experience to enhance my UX skills.
            </p>
            <p>
            In my spare time, you'll find me learning more about creatively applying machine learning and data analytics in new ways. That, or just doodling and reading about history.
            </p>
        	<p>
        	I can be found in Toronto, Ontario, Canada. Probably working on hobbies or projects.
        	</p>
        	<p>
        	</p>
            	<br />
        	<a class="inline-a" target="_blank" href="https://drive.google.com/file/d/1sMYQzqJMsI7QLcOfawYpcD565c6HQTgs/view?usp=sharing">
        		Here is my resume in PDF.
        	</a>
        	<br />
            	<br />
            <NavLink class="inline-a" href="" to="/contact">Feel free to reach out!</NavLink>
        	<br />
        	<br />
        	<br />
        	<br />
            <label class="label">
              <div class="toggle">
                <input class="toggle-state" onClick={this.onToggle} type="checkbox" name="check" value="check" id="skill-type"/>
                <div class="indicator"></div>
              </div>
            </label>
        	<h3 id="skills">UX Skills</h3>
            <div class="skills top-border" id="ux-skills">
                <div>
                    <p>Designs using</p>
                    <ul>
                        <li>figma</li>
                        <li>illustrator</li>
                        <li>Photoshop</li>
                        <li>XD</li>
                    </ul>
                </div>
                <div>
                    <p>Designs with</p>
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
                    <p>Methods used</p>
                    <ul>
                        <li>Card Sorting</li>
                        <li>Tree Testing</li>
                        <li>Surveys</li>
                        <li>Interviews</li>
                        <li>Usability Testing</li>
                    </ul>
                </div>
            </div>
            <div class="skills top-border" id="cs-skills">
                <div>
                    <p>Codes using</p>
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
                    <p>Is learning</p>
                    <ul>
                        <li>Haskell</li>
                        <li>Swift</li>
                    </ul>
                </div>
                <div>
                    <p>Can use</p>
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
        	<h3>Education</h3>
        	<div class="education top-border">
        		<div>
        			<p>Masters of Information / UX Design, Data Science @ University of Toronto, St George / 2022</p>
        			<br />
        			<p>Bachelors of Applied Science / Computer Science @ McMaster University / 2020</p>
        		</div>
        	</div>
        	<br />
        	<br />
        	<br />
        	<h3>Experience</h3>
        	<div class="top-border"></div>
        	<div>
        	  <p>UX Designer & Developer / <a href="https://www.caseware.com/ca" target="_blank">CaseWare</a> /  Toronto ON / May 2018-2019</p>
        	</div>
        	<br />
        	<div class="top-border-dashed">
        	  <p>Junior Web Dev & Graphic Designer / <a href="https://studentsuccess.mcmaster.ca/" target="_blank">McMaster SSC</a> / Hamilton ON / Summer 2017</p>
        	</div>
        	<br />
        	<div class="top-border-dashed">
        	  <p>Software Design Engineer Intern / <a href="https://www.concur.com/" target="_blank">Concur</a>  / Seattle WA / Summer 2016</p>
        	</div>
        	<br />
        	<br />
        	<h3>Acitivities</h3>
        	<div class="top-border">
        	  <p>Design Lead / DeltaHacks / Jan 2016-May 2017</p>
        	</div>
        		<br />
        	<div class="top-border-dashed">
        	  <p>Dev Mentor / NameCheap / Feb 2016-Jan 2017</p>
        	</div>
        		<br />
        	<div class="top-border-dashed">
        	  <p>Instructor / Mac Outreach / Sep 2015-16</p>
        	</div>
        </div>


    );
  }
}

export default About;
