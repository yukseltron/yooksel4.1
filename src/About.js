import React, { Component } from "react";
import './about.css';

class About extends Component {
  render() {
    return (
		<div class='about-body fade-in animate_animated animate__fadeInUpBig'>
			<p>
			Is a living human being who does coding, design, writing, and art, etc.
			</p>
			<p>
			*funny joke*
			</p>
			<p>
			Can be found somewhere in Toronto, Ontario, Canada.
			</p>
			<p>
			Currently, pursuing a Masters of Information in UX Design and Human Centered Data Science at the University of Toronto, St.George campus.
			</p>
			<p>
			Loves art, technology, sports, people etc.
			</p>
			<p>
			</p>
			<a target="_blank" href="https://drive.google.com/file/d/1sMYQzqJMsI7QLcOfawYpcD565c6HQTgs/view?usp=sharing">
				Here is my resume in PDF.
			</a>
			<br />
			<br />
			<br />
			<br />
			<h3>Skills</h3>
			<div class="skills top-border">
				<div>
					<p>Codes with</p>
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
					<p>Designs with</p>
					<ul>
						<li>illustrator</li>
						<li>figma</li>
						<li>XD</li>
						<li>Photoshop</li>
						<li>InDesign</li>
					</ul>
				</div>
				<div>
					<p>Learning</p>
					<ul>
						<li>Haskell</li>
						<li>Swift</li>
						<li>After Effects</li>
					</ul>
				</div>
				<div>
					<p>Has used</p>
					<ul>
						<li>C</li>
						<li>SQL</li>
						<li>Elm</li>
						<li>Assembly</li>
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
