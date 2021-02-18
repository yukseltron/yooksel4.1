import React, { Component } from "react";
import './home.css';

class Home extends Component {
  render() {
    return (
		<div class="fade-in home animate_animated animate__fadeInUp">
			<div class="intro">
				<div>
		    		<h1>Hello! I am a</h1>
					<h1 onclick="onNavigate('/projects-ux'); return false;" onmouseover="changeShape('designer');" onmouseout="returnShape()" class="gradient2 gradient btn">Designer</h1>
		            <h1 onclick="onNavigate('/projects-code'); return false;" onmouseover="changeShape('developer');" onmouseout="returnShape()" class="gradient1 gradient btn">Developer</h1>
					<h1 onclick="onNavigate('/about');" onmouseover="changeShape('student');" onmouseout="returnShape()" class="gradient3 gradient btn">Student</h1>
				</div>
				<h2>Who does design/code/art/writing.</h2>
				<h2>You can check out all my projects <a onclick="onNavigate('/projects'); return false;">here</a>.</h2>
				<h2>And find ways to contact me <a onclick="onNavigate('/contact'); return false;">here</a>.</h2>
				<br />
				<p>This site was built entirely from scratch and is still a W.I.P.</p>
			</div>
			<div class="magnifier-container">
		        <div id="shape" class="shape1"></div>
			</div>
		</div>
    );
  }
}

export default Home;
