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
import {Slide, Fade, LightSpeed} from 'react-reveal';
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
        <Fade top cascade>
        <div>
	  	<h1 ref={this.myDivToFocus}>Improving Quercus</h1>
		<h4 class="p-center">2020</h4>
	  	<h4 class="subtitle">Helping students organize their courses and form teams online.</h4>
        </div>
        </Fade>
		<div class="spacer">
            <Fade bottom>
            <div class="inner-frame">
			<img class="inner-frame" id="quercus" loading="lazy" src={clayIMG}/>
            </div>
            </Fade>
            <br/>
		</div>
    		<div class="background-info border-top">
			<div class="my-info center-content">
                <div class="role-info">
                        <Slide bottom>
                        <div>
                            <h2>In collaboration with</h2>
                            <p>
                                <a href="mailto:mikella.seth@mail.utoronto.ca">Mikella Seth</a><br/>and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Suzie Tran</a>.
                            </p>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div>
                            <h2>My role</h2>
                            <p>UI Designer<br/>User Researcher<br/>Illustrator</p>
                        </div>
                        </Slide>
                        <br/>
                        <Slide bottom>
                        <div>
                            <h2>Tools Used</h2>
                            <p>Adobe XD<br/>Google Forms<br/>Adobe Illustrator</p>
                        </div>
                        </Slide>
                    </div>
    				<br/>
                    <div class="background-info">
                        <Slide bottom>
                        <div>
                        <h4>For: The University of Toronto<br/>(Hypothetical)</h4>
                        <h4>Platform: Web</h4>
                        <h4>September-December 2020</h4>
                        </div>
                        </Slide>
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
        <div class="spacer border-top" ref={this.div1}>
            <div>
                <Slide bottom>
                <div>
                    <h3>Introduction</h3>
                    <br/>
                    <div class="problem-section spacer border-right">
                        <Fade left>
                        <img loading="lazy" class="problem" src={problem}/>
                        </Fade>
                        <div class="center-content">
                            <h2>The Problem</h2>
                            <p class="p-left">When using Quercus, finding files can be confusing for new students since each professor organizes files differently. This confusion can lead to precious time wasted for an assignment.</p>
                            <p class="p-left">As well, some projects require forming teams, which can be difficult to do online. Students can't tell who is still looking for a group or where they can even contact anyone.</p>
                        </div>
                    </div>
                </div>
                </Slide>
            </div>
            <br/>
            <br/>
            <br/>
            <Slide bottom>
            <div>
                <br/>
                <div class="horizontal-section spacer border-left">
                    <div class="solution-info center-content">
                        <div>
                                <h2>The Solution</h2>
                                <p>After implementing and testing our ideas, we recommend the following solutions for fulfilling the needs above:</p>
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
                    <Fade bottom>
                    <img loading="lazy" src={solution}/>
                    </Fade>
                </div>
            </div>
            </Slide>
        </div>
		<div class="spacer border-top">
        <Slide bottom>
            <div>
                <div class="center-content">
        		  	<h3>My Contributions</h3>
                    <p>For the research phase, I was responsible for designing the survey questionnaire. I also contributed to the user analysis by making the persona and journey maps.</p>
                    <p>During ideation, I helped come up with ideas and organized our results visually on a prioritization grid. As well, I mapped out our user scenarios through user flow diagrams.</p>
                    <p>For the design phase, I was responsible for making the Midfi and Hifi prototypes and the overall visual design.</p>
                </div>
            </div>
        </Slide>
		  	<br/>
    	  	<br/>
    	  	<br/>
		</div>
		<div class="section spacer border-top" ref={this.div2}>
            <div class="spacer">
                <Slide bottom>
                <div class="spacer">
        			<h3>Research</h3>
                    <p class="center-content">We began this project with by developing a survey and conducting interviews for user research. We gathered our data from 11 university students on their experiences using Quercus. I devised the questionnaire with Suzie, and conducted 1 user interview.</p>
                    <br/>
            	  	<br/>
                    <h2>Gathering our data showed:</h2>
        			<p class="p-center">Students struggle with inconsistent course pages,</p>
                    <Fade left>
        			<img src={research1}/>
                    </Fade>
        			<p class="p-center">And that they do not really participate in online dicussions.</p>
                    <Fade right>
        			<img loading="lazy" src={research2}/>
                    </Fade>
                </div>
                </Slide>
            </div>
            <br/>
			<br/>
            <br/>
            <div class="spacer">
                <Slide bottom>
                <div class="spacer">
        			<h2>Persona</h2>
                    <p class="center-content">Analyzing what we learned, we constructed a persona. We initially made proto-personas on our own with empathy maps, and I designed the final persona by synthesizing them.</p>
                    <br/>
                    <br/>
                    <Fade left>
        			<img loading="lazy" src={persona}/>
                    </Fade>
                </div>
                </Slide>
            </div>
		  	<br/>
			<br/>
            <br/>
            <div class="needs-section spacer center-content">
                <Slide bottom>
                <div>
                    <h2>The Needs</h2>
                    <p class="text-left">We identified the following needs based on our user research:</p>
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
                </Slide>
            </div>
            <br/>
            <br/>
            <br/>
            <Slide bottom>
            <div class="">
    			<h2>Journey Mapping</h2>
                <br/>
                <div>
                    <p class="center-content">Afterwards, we created journey maps to connect with our users, see how their process works, and outline pain points and areas of opportunities.<br/><br/>This journey map is for an as-is-scenario where our user prepares for a lecture and assignments.</p>
                    <br/>
                    <br/>
                    <br/>
                    <Fade right>
                    <div>
                    <img class="img-l" loading="lazy" src={journey}/>
                    </div>
                    </Fade>
                </div>
            </div>
            </Slide>
            <br/>
            <br/>
            <br/>
		</div>
		<div class="border-top section spacer" ref={this.div3}>
            <Slide bottom>
            <div class="spacer">
    			<h3>Ideation</h3>
                <p class="center-content spacer">At this point, we understood the user context by developing a polished persona. We identified what our users do on Quercus, what painpoints they encounter, and what constraints they endured. Now we just had to figure out what were good solutions.</p>
    			<h2>Our Ideas</h2>
                <p class="center-content">We came up with ideas and ranked them on a prioritization grid as seen below. I made the illustrations and the grid for the ideas below.</p>
                <Fade left>
                <img loading="lazy" src={prioriGrid}/>
                </Fade>
                <p class="center-content">We each voted for what we felt were the right ideas to work on, when considering time, effort, and impact. The top 3 ideas we felt were best to work on:</p>
                <Slide bottom>
                <div>
                    <div class="ideation-section center-content">
                        <h4>1. Content Connections</h4>
                        <p>Showing which lectures are relevant to an assignment.</p>
                    </div>
                </div>
                </Slide>
                <Slide bottom>
                <div>
                    <div class="ideation-section center-content">
                        <h4>2. Meeting Classmates</h4>
                        <p>Helping students meet others and form teams quickly.</p>
                    </div>
                </div>
                </Slide>
                <Slide bottom>
                <div>
                    <div class="ideation-section center-content spacer">
                        <h4>3. Course Consistency</h4>
                        <p>Making course material easy to find across different courses online.</p>
                    </div>
                </div>
                </Slide>
            </div>
            </Slide>
            <Slide bottom>
            <div class="">
    			<h2>Sketches</h2>
                <br/>
                <p class="center-content">We tested out on pen and paper to see how we could implement our ideas. Here are some of the sketches we made:</p>
                <Fade right>
                <div>
                <img loading="lazy" class="img-l" src={sketches}/>
                </div>
                </Fade>
            </div>
            </Slide>
		</div>
		<div class="section border-top">
        <br/>
            <div class="spacer">
                <Slide bottom>
                    <div class="spacer">
            			<h3>Prototyping</h3>
                        <h2>Midfi</h2>
                        <p class="center-content">Using the sketches, I made some midfi screens to better test out and showcase our ideas as an MVP.</p>
                        <Fade left>
                        <img loading="lazy" src={midfi}/>
                        </Fade>
                    </div>
                </Slide>
            </div>
            <br/>
            <div class="spacer">
                <Slide bottom>
                <div>
                    <h2>User Scenarios</h2>
                    <p class="center-content">Here are the the midfi user flows for the 3 ideas we settled on.</p>
                    <h4>1. Content Connections</h4>
                    <h4>2. Meeting Classmates</h4>
                    <h4 class="striked">3. Course Consistency</h4>
                    <h4>3. Interests Boards</h4>
                </div>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Slide bottom>
                    <div class="scenario-section">
                        <div>
                            <h4>Content Connections</h4>
                            <p class="center-content">This scenario depicts how our user Allie could prepare for an assignment. She's shown which assignment needs the most attention, and can instantly find the lectures relevant to it. As well, she can view the lecture in different formats to her liking.</p>
                        </div>
                        <br/>
                        <br/>
                        <Fade right>
                        <div>
                        <img class="img-l" loading="lazy" src={scenario1}/>
                        </div>
                        </Fade>
                    </div>
                    </Slide>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Slide bottom>
                    <div class="scenario-section">
                        <div>
                            <h4>Meeting Classmates</h4>
                            <p class="center-content">Here, Allie needs to find a teammate to work with. She has the option to do a group search, see which classmates she's worked with before, and view the classmate's contact info. Past group details are also available to be seen.</p>
                        </div>
                        <br/>
                        <br/>
                        <Fade left>
                        <div>
                        <img loading="lazy" class="img-l" src={scenario2}/>
                        </div>
                        </Fade>
                    </div>
                    </Slide>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="scenario-section">
                        <Slide bottom>
                        <div>
                            <h4 class="striked">Course Consistency</h4>
                            <h4>Interests Boards</h4>
                            <p class="center-content">Originally, we wanted courses online to be organized consistently. But when considering constraints we encountered a legal hurdle. Professors must be given total creative freedom over how they organize a course. <br/> <br/>So we switched to an idea that focuses on making connections with classmates instead. In this scenario, we see how Allie can connect to classmates as friends by exploring and joining interest groups for a course. This way, Allie can find ways to bond online with classmates she may have never met before.</p>
                        </div>
                        </Slide>
                        <br/>
                        <br/>
                        <Fade right>
                        <div>
                        <img class="img-l" loading="lazy" src={scenario3}/>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div class="spacer">
                <Slide bottom>
                <div class="spacer">
                    <h2>Usability Testing</h2>
                    <p class="center-content">After I turned our midfi into a clickable prototype, we conducted usability testing to see where our midfi design could be refined.</p>
                    <br/>
                    <br/>
                    <div class="horizontal-section">
                        <Slide bottom>
                        <div>
                                <p class="center-content">Designing our testing method, we created tasks for our users to accomplish along with follow up questions and steps for a predetermined 'happy' path to compare with. These questions and steps help determine our success criteria.</p><br/><br/>
                                <h4>Negatives</h4>
                                <p>Our interviews showed that participants could miss some of the new features and were confused by the difference between 'Group search' and 'Connections'.</p>
                                <h4>Positives</h4>
                                <p>On the positive, participants really enjoyed the interests board and liked the customizable course materials. Overall they felt the user flow was improved.</p><br/>
                                <h4 class="quote">"It was pretty easy and intuitive to use compared to the current system,<br/>so I much prefer the new system."</h4>
                                <p class="p-center">- interview participant</p><br/>
                        </div>
                        </Slide>
                        <Fade left>
                        <img loading="lazy" class="img-m" src={criteria}/>
                        </Fade>
                    </div>
                    <p class="p-right">An example task from our interviews.</p>
                    <br/>
                </div>
                </Slide>
            </div>
            <br/>
            <div class="border-top">
                <Slide bottom>
                <div class="spacer final-design-section border-top">
                    <h3>Final Design</h3>
                    <p class="center-content">With the feedback gathered, we each designed our own separate hifi prototype. These are mockups of the hifi prototype I made.</p>
                    <br/>
                    <Fade right>
                    <div>
                    <img class="img-l spacer" loading="lazy" src={dribbble}/>
                    </div>
                    </Fade>
                </div>
                </Slide>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
                <div class="horizontal-section">
                    <Slide bottom>
                    <div>
                        <h2 class="p-left">Content Connections</h2>
                        <h4 class="storyboard-h4">Quickly find the right lectures to help with assignments.</h4>
                    </div>
                    </Slide>
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
                    <Slide bottom>
                    <div>
                        <h2 class="p-left">Meeting classmates</h2>
                        <h4 class="storyboard-h4">Make teams without a sweat and see who you've worked with before.</h4>
                    </div>
                    </Slide>
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
                    <Slide bottom>
                    <div>
                        <h2 class="p-left">Interest Boards</h2>
                        <h4 class="storyboard-h4">Find and bond with classmates over your shared interests.</h4>
                    </div>
                    </Slide>
                    <img loading="lazy" class="subtle-shadow" src={s3}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="border-bottom border-top">
            <Slide bottom>
            <div>
                <h2 class="p-center">Check it out</h2>
                <h4 class="p-center"><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
                <h4 class="p-center"><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
            </div>
            </Slide>
            </div>
            <div class="spacer"></div>
            <Slide bottom>
            <div class="spacer">
    			<h2>Reflection</h2>
                <Slide bottom>
                <div>
                    <p class="center-content">Looking back, although we managed to successfully focus on key ideas, there were some ideas we could no longer work on. Initially, course consistency was an important goal of ours. However, we learned of legal barriers that ensure professors have total freedom and modularity with their course design. This made course consistency a very idealistic goal too dependent on legal matters.</p>
                </div>
                </Slide>
                <br/>
                <Slide bottom>
                <div>
                <p class="center-content">While working on this project I was able to learn new features for Adobe XD (such as mapping a screen onto another screen), and get a better understanding of how to delegate tasks in a group UX project.</p>
                </div>
                </Slide>
                <br/>
                <Slide bottom>
                <div>
                <p class="center-content">Overall, I'm proud of my team's work. We were shorthanded to begin with, but we all managed to get all our deliverables done on time.</p>
                </div>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2 class="spacer"><a onClick={this.handleOnClick}>Return to top</a></h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </Slide>
		</div>
        </LazyLoad>
	  </div>

    );
  }
}

export default Quercus;
