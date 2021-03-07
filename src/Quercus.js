import React, { Component } from "react";
import quercusIMG from './project-svgs/quercus.svg';
import './projects-style.css';
import clayIMG from './quercus/quercus-clay.png';
import research1 from './quercus/research-1.svg';
import research2 from './quercus/research-2.svg';
import persona from './quercus/persona.svg';
import prioriGrid from './quercus/p-grid.svg';
import ideas from './quercus/ideas.svg';
import sketches from './quercus/sketches.svg';
import cover from './quercus/cover2.png';
import problem from './quercus/problem.svg';
import solution from './quercus/solution.png';
import solution2 from './quercus/solution2.png';
import journey from './quercus/journeymap.svg';


class Quercus extends Component {
  render() {
    return (
	  <div class="fade-in project">
	  	<h1>Improving Quercus</h1>
		<div class="center proj-info">
			<h4>2020</h4>
		</div>
	  	<h4 class="subtitle">Helping students organize their courses and form teams online.</h4>
		<div class="border-bottom">
			<img id="quercus" src={clayIMG}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
		</div>
        <br/>
		<div class="background-info">
            <div class="info">
                <h2>In collaboration with</h2>
                <p>
                    <a href="mailto:mikella.seth@mail.utoronto.ca">Mikella Seth</a> and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Suzie Tran</a>.
                </p>
            </div>
			<br/>
			<div class="my-info">
                <div class="role-info">
                    <div>
                        <h2>My role</h2>
                        <p>UI Designer<br/>Survey Maker<br/>Illustrator</p>
                    </div>
                    <br/>
                    <div>
                        <h2>Tools Used</h2>
                        <p>Adobe XD<br/>Google Forms<br/>Adobe illustrator</p>
                    </div>
                </div>
				<br/>
                <div class="background-info">
                    <h4>For: The University of Toronto<br/>(Hypothetical)</h4>
                    <h4>Platform: Web</h4>
                    <h4>September-December 2020</h4>
                </div>
                <br/>
			</div>
            <br/>
		</div>
	  	<br/>
	  	<p class="border-bottom border-top">
	  		<h4><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
	  		<h4><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
	  	</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="border-bottom section">
            <div class="circlebox">
                <div class="div1 filled"></div>
                <div class="div2"></div>
                <div class="div3"></div>
                <div class="div4"></div>
            </div>
            <h3>Overview</h3>
            <p>Quercus (a.k.a 'Canvas') is an online learning system for the University of Toronto (UofT). Students and professors alike use it to organize and manage courses.</p>
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
                    <h2>The Problem</h2>
                    <div class="problem-section">
                        <img src={problem}/>
                        <div>
                            <p>Finding files can be confusing for new students since each professor organizes files differently. This confusion can lead to precious time wasted for an assignment.</p>
                            <p>As well, some projects require forming teams, which could be difficult to do online. Students can't tell who is still looking for a group or where they can even contact anyone.</p>
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
                <div class="needs-section">
                    <h2>The Needs</h2>
                    <div class="needs">
                        <h1>1.</h1>
                        <h4 class="h-left">Students need a way to engage with professors and fellow students better, so that they may complete group faster and make lasting connections.</h4>
                    </div>
                    <div class="needs">
                        <h1>2.</h1>
                        <h4 class="h-left">Students need a way to find relevant course materials quickly, so that time isn't wasted searching for the right lectures to review.</h4>
                    </div>
                    <div class="needs">
                        <h1>3.</h1>
                        <h4 class="h-left">Students need consistent course organization online, so that information on the course can be found and quickly understood.</h4>
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
            <div>
                <h2>The Solution</h2>
                <br/>
                <div class="solution-sector">
                    <div class="solution-info">
                        <p class="p-center">Our recommendation is to implement on Quercus:</p>
                        <div>
                            <h4>A group search feature, to find teammates and their contact info.</h4>
                            <h4>Interest boards to learn about classmates, without needing to contact them.</h4>
                            <h4>Guides on assignments to important and relevant lecture modules.</h4>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class="solution-imgs">
                        <img src={solution}/>
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
	  	<br/>
		<div class="border-bottom section">
		  	<h3>My Contributions</h3>
            <p>For the research phase, I was responsible for the survey questions and format. I contributed to the user analysis in making the persona and journey maps.</p>
            <p>During ideation, I helped come up with ideas and organized our results on a prioritization grid. As well, I helped design our user scenarios.</p>
            <p>In the design phase, I was responsible for making the Midfi and Hifi prototypes and the overall visual design.</p>
		  	<br/>
    	  	<br/>
    	  	<br/>
		</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
		<div class="border-bottom section">
            <div class="circlebox">
                <div class="div1"></div>
                <div class="div2 filled"></div>
                <div class="div3"></div>
                <div class="div4"></div>
            </div>
			<h3>Research</h3>
            <p class="p-center">We gathered our data from 11 UofT students through a survey on their experiences using Quercus.</p>
            <br/>
    	  	<br/>
            <h2>Our data showed:</h2>
			<p class="p-center">Students struggle with inconsistent course pages</p>
			<img  class="img-m"src={research1}/>
			<p class="p-center">And that they do not really participate in online dicussions</p>
			<img class="img-m" src={research2}/>
            <br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
            <br/>
            <br/>
			<h2>Persona</h2>
            <p class="p-center">Analyzing what we learned, we constructed a persona.</p>
            <br/>
            <br/>
			<img class="img-m" src={persona}/>
		  	<br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
            <br/>
            <br/>
			<h2>Journey Mapping</h2>
            <br/>
            <div class="journey-section">
                <p>Afterwards, we created journey maps to connect with our users, see how their process works, and outline pain points and areas of opportunities.<br/><br/>This journey map is for a scenario where our user prepares for a lecture and assignments.</p>
                <img src={journey}/>
            </div>
            <br/>
            <br/>
            <br/>
		</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
		<div class="border-bottom section">
            <div class="circlebox">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3 filled"></div>
            <div class="div4"></div>
            </div>
			<h3>Ideation</h3>
			<h2>Our Ideas</h2>
            <p class="p-center">We came up with ideas and ranked them on a prioritization grid as seen below.</p>
			<img class="img-m" src={prioriGrid}/>
            <h4>The top ideas we felt was best to work on were:</h4>
			<div class="flowerbox">
                <div class="div1">
                    <h4>Content Connections</h4>
                    <p>Showing which lectures are relevant to an assignment</p>
                </div>
                <div class="div2">
                    <h4>Meeting Classmates</h4>
                    <p>Helping students meet others and form teams quickly</p>
                </div>
                <div class="div3">
                    <h4>Course Consistency</h4>
                    <p>Making course material easy to find across different courses online</p>
                </div>
            </div>
            <br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
			<h2>Sketches</h2>
            <br/>
            <p class="p-center">We tested out on pen and paper to see how we could implement our ideas:</p>
			<img class="img-m" src={sketches}/>
            <br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
		</div>
        <br/>
        <div class="circlebox">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3"></div>
            <div class="div4 filled"></div>
        </div>
		<div class="border-bottom section">
        <br/>
			<h3>Prototyping</h3>
            <h2>Midfi</h2>
            <br/>
            <br/>
            <br/>
            <h2>User Scenarios</h2>
            <p class="p-center">Here are the three main user scenarios for this project.</p>
            <br/>
            <br/>
            <br/>
            <h2>Usability Testing</h2>
            <br/>
            <h2>Final Design</h2>
            <br/>
			<h2>Storyboard 1</h2>
			<h2>Storyboard 2</h2>
			<h2>Lessons Learned</h2>
			<br/>
		</div>
	  </div>

    );
  }
}

export default Quercus;
