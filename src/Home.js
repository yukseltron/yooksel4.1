import React, { Component } from "react";
import './home.css';

class Home extends Component {
  render() {
    return (
		<div class="fade-in home animate_animated animate__fadeInUp">
			<div class="intro">
				<div>
		    		<h1>Hello! I am a</h1>
					<h1 onmouseover="changeShape('designer');" onmouseout="returnShape()" class="gradient2 gradient btn">Designer</h1>
		            <h1 onmouseover="changeShape('developer');" onmouseout="returnShape()" class="gradient1 gradient btn">Developer</h1>
					<h1 onmouseover="changeShape('student');" onmouseout="returnShape()" class="gradient3 gradient btn">Student</h1>
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

function changeShape(type) {
    if (type == 'designer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #F8333C 0%, #FCAB10 100%)";
    } else if (type == 'developer') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #38AECC 0%, #35A7FF 100%)";
    } else if (type == 'student') {
        var x = document.getElementById("shape");
        x.style.backgroundImage = "linear-gradient(45deg, #FCAB10 0%, #FFE74C 100%)";
    }
}

function returnShape() {
    var x = document.getElementById("shape");
    x.style.backgroundImage = "none";
    x.style.backgroundImage = "linear-gradient(45deg, #81F499 0%, #6DD3CE 100%)";
}

export default Home;
