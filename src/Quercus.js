import LazyLoad from 'react-lazyload';
import quercusIMG from './project-svgs/quercus.svg';
import './projects-style.css';
import clayIMG from './quercus/quercus-clay.png';
import research1 from './quercus/research-1.svg';
import research2 from './quercus/research-2.svg';
import persona from './quercus/persona.svg';
import prioriGrid from './quercus/p-grid.svg';
import sketches from './quercus/sketches.svg';
import problem from './quercus/problem.svg';
import solution from './quercus/solution.png';
import solution2 from './quercus/solution2.png';
import journey from './quercus/journeymap.svg';
import midfi from './quercus/midfi.svg';
import scenario1 from './quercus/s1.png';
import scenario2 from './quercus/s2.png';
import scenario3 from './quercus/s3.png';
import criteria from './quercus/test.svg';
import result from './quercus/results.svg';
import s1 from './quercus/s1.gif';
import s2 from './quercus/s2.gif';
import s3 from './quercus/s3.gif';
import dribbble from './quercus/dribbble.svg';
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


class Quercus extends Component {
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
      <LazyLoad placeholder={<img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"/>}>
	  	<h1 ref={this.myDivToFocus}>Improving Quercus</h1>
		<h4 class="p-center">2020</h4>
	  	<h4 class="subtitle">Helping students organize their courses and form teams online.</h4>
		<div class="border-bottom">
			<img id="quercus" loading="lazy" src={clayIMG}/>
            <br/>
		</div>
    		<div class="background-info border-bottom">
			<div class="my-info">
                <div class="role-info">
                    <div>
                        <h2>In collaboration with</h2>
                        <p>
                            <a href="mailto:mikella.seth@mail.utoronto.ca">Mikella Seth</a><br/>and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Suzie Tran</a>.
                        </p>
                    </div>
                    <div>
                        <h2>My role</h2>
                        <p>UI Designer<br/>User Researcher<br/>Illustrator</p>
                    </div>
                    <br/>
                    <div>
                        <h2>Tools Used</h2>
                        <p>Adobe XD<br/>Google Forms<br/>Adobe Illustrator</p>
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
			<br/>
			<br/>
            <h3>Overview</h3>
            <p class="center-content spacer">Quercus (a.k.a 'Canvas') is an online learning system for the University of Toronto (UofT). Students and professors alike use it to organize and manage courses.</p>
		</div>
	  	<br/>
        <div class="spacer" ref={this.div1}>
            <div>
                <div>
                    <h3>Introduction</h3>
                    <br/>
                    <div class="problem-section spacer">
                        <img loading="lazy" class="problem" src={problem}/>
                        <div class="center-content">
                            <h2>The Problem</h2>
                            <p class="p-left">When using Quercus, finding files can be confusing for new students since each professor organizes files differently. This confusion can lead to precious time wasted for an assignment.</p>
                            <p class="p-left">As well, some projects require forming teams, which can be difficult to do online. Students can't tell who is still looking for a group or where they can even contact anyone.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div class="needs-section spacer center-content">
                    <h2>The Needs</h2>
                    <div class="needs">
                        <h1>1.</h1>
                        <h4 class="h-left">Students need a way to engage with professors and fellow students better, so that they may form groups faster and make lasting connections.</h4>
                    </div>
                    <div class="needs">
                        <h1>2.</h1>
                        <h4 class="h-left">Students need a way to find relevant course materials quickly, so that time isn't wasted searching for the right lectures to review.</h4>
                    </div>
                    <div class="needs spacer">
                        <h1>3.</h1>
                        <h4 class="h-left">Students need consistent course organization online, so that information on the course can be found and quickly understood.</h4>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <h2>The Solution</h2>
                <br/>
                <div class="solution-sector spacer center-content">
                    <div class="solution-info">
                        <div>
                            <p class="p-left">Our recommendation is to implement on Quercus:</p>
                            <h4>• A group search feature, to find teammates and their contact info.</h4>
                            <br/>
                            <h4>• Interest boards to learn about classmates, without needing to contact them.</h4>
                            <br/>
                            <h4>• Guides on assignments to important and relevant lecture modules.</h4>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <img loading="lazy" src={solution}/>
                </div>
            </div>
        </div>
		<div class="border-bottom spacer border-top">
            <div class="center-content">
    		  	<h3>My Contributions</h3>
                <p>For the research phase, I was responsible for the survey questions and format. I also contributed to the user analysis in making the persona and journey maps.</p>
                <p>During ideation, I helped come up with ideas and organized our results on a prioritization grid. As well, I helped design our user scenarios.</p>
                <p>In the design phase, I was responsible for making the Midfi and Hifi prototypes and the overall visual design.</p>
            </div>
		  	<br/>
    	  	<br/>
    	  	<br/>
		</div>
		<div class="section spacer" ref={this.div2}>
            <div class="spacer">
    			<h3>Research</h3>
                <p class="center-content">We gathered our data from 11 UofT students through a survey on their experiences using Quercus.</p>
                <br/>
        	  	<br/>
                <h2>Our data showed:</h2>
    			<p class="p-center">Students struggle with inconsistent course pages</p>
    			<img src={research1}/>
    			<p class="p-center">And that they do not really participate in online dicussions</p>
    			<img loading="lazy" src={research2}/>
            </div>
            <br/>
			<br/>
            <br/>
            <div class="spacer">
    			<h2>Persona</h2>
                <p class="p-center">Analyzing what we learned, we constructed a persona.</p>
                <br/>
                <br/>
    			<img loading="lazy" src={persona}/>
            </div>
		  	<br/>
			<br/>
            <br/>
            <div class="">
    			<h2>Journey Mapping</h2>
                <br/>
                <div>
                    <p class="center-content">Afterwards, we created journey maps to connect with our users, see how their process works, and outline pain points and areas of opportunities.<br/><br/>This journey map is for a scenario where our user prepares for a lecture and assignments.</p>
                    <br/>
                    <br/>
                    <br/>
                    <img class="img-l" loading="lazy" src={journey}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
		</div>
		<div class="border-top section spacer" ref={this.div3}>
            <div class="spacer">
    			<h3>Ideation</h3>
    			<h2>Our Ideas</h2>
                <p class="center-content">We came up with ideas and ranked them on a prioritization grid as seen below.</p>
    			<img loading="lazy" src={prioriGrid}/>
                <p class="p-center">The top ideas we felt was best to work on were:</p>
                <div class="ideation-section center-content">
                    <h4>Content Connections</h4>
                    <p>Showing which lectures are relevant to an assignment.</p>
                </div>
                <div class="ideation-section center-content">
                    <h4>Meeting Classmates</h4>
                    <p>Helping students meet others and form teams quickly.</p>
                </div>
                <div class="ideation-section center-content">
                    <h4>Course Consistency</h4>
                    <p>Making course material easy to find across different courses online.</p>
                </div>
            </div>
            <div class="">
    			<h2>Sketches</h2>
                <br/>
                <p class="center-content">We tested out on pen and paper to see how we could implement our ideas:</p>
    			<img loading="lazy" src={sketches}/>
            </div>
		</div>
		<div class="section">
        <br/>
            <div class="spacer border-top">
    			<h3>Prototyping</h3>
                <h2>Midfi</h2>
                <p class="center-content">Using the sketches, I made some midfi screens to better test out and showcase our ideas as an MVP.</p>
    			<img loading="lazy" src={midfi}/>
            </div>
            <br/>
            <div class="spacer">
                <h2>User Scenarios</h2>
                <p class="center-content">Here we show the midfi user flows for the 3 ideas we settled on.</p>
                <h4>1. Content Connections</h4>
                <h4>2. Meeting Classmates</h4>
                <h4 class="striked">3. Course Consistency</h4>
                <h4>3. Interests Boards</h4>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <div class="scenario-section">
                        <div>
                            <h4>Content Connections</h4>
                            <p class="center-content">This scenario depicts how our user Allie could prepare for an assignment. She's shown which assignment needs the most attention, and can instantly find the lectures relevant to it. As well, she can view the lecture in different formats to her liking.</p>
                        </div>
                        <br/>
                        <br/>
                        <img class="img-l" loading="lazy" src={scenario1}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="scenario-section">
                        <div>
                            <h4>Meeting Classmates</h4>
                            <p class="center-content">Here, Allie needs to find a teammate to work with. She has the option to do a group search, see which classmates she's worked with before, and view the classmate's contact info. Past group details are also available to be seen.</p>
                        </div>
                        <br/>
                        <br/>
                        <img loading="lazy" class="img-l" src={scenario2}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="scenario-section">
                        <div>
                            <h4 class="striked">Course Consistency</h4>
                            <h4>Interests Baords</h4>
                            <p class="center-content">Originally, we wanted courses online to be organized consistently. Unfortunately we found out the barrier to this is a legal hurdle. Professors must be given total creative freedom over how they organize a course. <br/> <br/>So we switched to an idea that focuses on making connections with classmates. In this scenario, we see how Allie can connect to classmates as friends by exploring and joining interest groups for a course. This way, Allie can find ways to bond online with classmates she may have never met before.</p>
                        </div>
                        <br/>
                        <br/>
                        <img class="img-l" loading="lazy" src={scenario3}/>
                    </div>
                </div>
            </div>
            <div class="spacer">
                <h2>Usability Testing</h2>
                <br/>
                <h4 class="quote">"It was pretty easy and intuitive to use compared to the current system,<br/>so I much prefer the new system."</h4>
                <p class="p-center">- interview participant</p>
                <br/>
                <br/>
                <div class="horizontal-section">
                            <p class="center-content">Designing our interview method, we conducted usability testing on our midfi prototype. We created tasks for our users to accomplish along with follow up questions. We then created steps for a predetermined 'happy' path for a task, along with its success criteria.<br/><br/>Our interviews showed that participants could miss some of the new features and were confused by the difference between 'Group search' and 'Connections'. On the positive, participants really enjoyed the interests board and liked the customizable course materials. Overall they felt the user flow was improved.</p>
                    <img loading="lazy" class="img-m" src={criteria}/>
                </div>
                <p class="p-right">An example task from our interviews.</p>
                <br/>
            </div>
            <br/>
            <div class="spacer final-design-section border-top">
                <h3>Final Design</h3>
                <p class="center-content">With the feedback gathered, we each designed our own separate hifi prototype. These are mockups of the hifi prototype I made.</p>
                <br/>
                <img loading="lazy" src={dribbble}/>
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
                        <h4 class="storyboard-h4">Quickly find the right lectures to help with assignments.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow" src={s1}/>
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
            			<h2 class="p-left">Meeting classmates</h2>
                        <h4 class="storyboard-h4">Make teams without a sweat and see who you've worked with before.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow" src={s2}/>
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
                        <h2 class="p-left">Interest Boards</h2>
                        <h4 class="storyboard-h4">Find and bond with classmates over your shared interests.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow" src={s3}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="border-bottom border-top spacer">
                <h2 class="p-center">Check it out</h2>
                <h4 class="p-center"><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
                <h4 class="p-center"><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
    			<h2>Reflection</h2>
                <p class="center-content">Looking back, although we managed to successfully focus on key ideas, there were some ideas we could no longer work on. Initially, course consistency was an important goal of ours. However, we learned of legal barriers that ensure professors have total freedom and modularity with their course design. This made course consistency a very idealistic goal too dependent on legal matters.</p>
                <br/>
                <p class="center-content">While working on this project I was able to learn new features for Adobe XD (such as mapping a screen onto another screen), and get a better understanding of how to delegate tasks in a group UX project.</p>
                <br/>
                <p class="center-content">Overall, I'm proud of my team's work. We were shorthanded to begin with, but we all managed to get all our deliverables done on time.</p>
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
        </LazyLoad>
	  </div>

    );
  }
}

export default Quercus;
