import React, { Component } from "react";
import quercusIMG from './project-svgs/quercus.svg';
import './projects-style.css';
import clayIMG from './quercus/quercus-clay.png';


class Quercus extends Component {
  render() {
    return (
	  <div class="fade-in project">
	  <div class="left">
		  <h4>2020</h4>
		  <h4>Web</h4>
		  <h4>Hypothetical</h4>
	  </div>
	  	<h1>Improving Quercus</h1>
	  	<h4 class="subtitle">Helping students organize their courses and form teams online.</h4>
		<div class="border-bottom">
			<img id="quercus" src={clayIMG}/>
		</div>
	  	<br/>
	  	<h2>In collaboration with</h2>
	  	<p>
	  		<a href="mailto:mikella.seth@mail.utoronto.ca">Mikella Seth</a> and <a href="mailto:nhatanh.tranle@mail.utoronto.ca">Suzie Tran</a>.
	  	</p>
	  	<br/>
		<h2>My role</h2>
		<p>UI Designer<br/>Survey Maker<br/>Illustrator</p>
		<br/>
	  	<h2>My contributions</h2>
	  	<p>Created the user survey and analyzed its results.<br/>Designed the midfi and hifi UI mockups and prototypes.<br/>Made illustrations and designed this case study.</p>
		<br/>
		<h2>Tools Used</h2>
		<p>Adobe XD</p>
	  	<br/>
	  	<p class="border-bottom border-top">
	  		<h4><a target="_blank" href="https://www.behance.net/gallery/111653313/Improving-Quercus">View case study on Behance</a></h4>
	  		<h4><a target="_blank" href="https://xd.adobe.com/view/bbecb767-a751-4c1d-b5a5-3131620dc877-eebf/?fullscreen">View final prototype</a></h4>
	  	</p>
		<div class="border-bottom section">
		  	<h3>Abstract</h3>
		  	<p>Our research showed that some students have a hard time making teams online and struggle finding the right classwork online.</p>
		  	<p>Through ideation, the two solutions we proposed were 1: to provide content connections for assignments to appropriate lectures, and 2: to create a platform to find people looking for teams.</p>
		  	<p>Applying and evaluating these ideas, it is clear that further refinements need to consider the professors' role and existing legal hurdles.</p>
		  	<p>This is due to the constraints of needing to give teachers total freedom in designing their classes.</p>
		  	<br/>
		</div>
		<div class="border-bottom section">
			<h3>Research</h3>
			<h2>Our data showed that students seem to:</h2>
			<p class="p-center">Struggle with inconsistent course pages</p>
			<p class="p-center">Do not really participate in online dicussions on Quercus</p>
			<br/>
			<h2>Persona</h2>
		  	<br/>
			<h2>Journey Mapping</h2>
			<br/>
		</div>
		<div class="border-bottom section">
			<h3>Ideation</h3>
			<h2>Our Ideas</h2>
			<br/>
			<h2>Sketches</h2>
			<br/>
			<h2>Midfi</h2>
			<br/>
			<h2>Usability Testing</h2>
			<br/>
		</div>
		<div class="border-bottom section">
			<h3>Final Prototype</h3>
			<h2>Lessons Learned</h2>
			<br/>
		</div>
	  </div>

    );
  }
}

export default Quercus;
