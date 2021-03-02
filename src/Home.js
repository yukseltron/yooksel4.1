import React, { Component } from "react";
import './home.css';

var backGradient = "";

class Home extends Component {
    changeShape(type) {
        if (type == 'designer') {
            backGradient = "linear-gradient(45deg, #F8333C 0%, #FCAB10 100%)";
        } else if (type == 'developer') {
            backGradient = "linear-gradient(45deg, #38AECC 0%, #35A7FF 100%)";
        } else if (type == 'student') {
            backGradient = "linear-gradient(45deg, #FCAB10 0%, #FFE74C 100%)";
        }
    }

    returnShape() {
        backGradient = "linear-gradient(45deg, #81F499 0%, #6DD3CE 100%)";
    }

  render() {
    return (
		<div class="fade-in home animate_animated animate__fadeInUp">
			<div class="intro">
				<div>
		    		<h1>Hello! I am a</h1>
					<h1 onMouseOver={this.changeShape('designer')} onMouseOut={this.returnShape()} class="gradient2 gradient btn">Designer</h1>
		            <h1 onMouseOver={this.changeShape('developer')} onMouseOut={this.returnShape()} class="gradient1 gradient btn">Developer</h1>
					<h1 onMouseOver={this.changeShape('student')} onMouseOut={this.returnShape()} class="gradient3 gradient btn">Student</h1>
				</div>
				<h2>Who does design/code/art/writing.</h2>
				<h2>You can check out all my projects <a onclick="onNavigate('/projects'); return false;">here</a>.</h2>
				<h2>And find ways to contact me <a onclick="onNavigate('/contact'); return false;">here</a>.</h2>
				<br />
				<p>This site was built entirely from scratch and is still a W.I.P.</p>
			</div>
			<div class="magnifier-container">
		        <div id="shape" style={{backgroundImage: backGradient}} class="shape1"></div>
			</div>
		</div>
    );
  }
}

export default Home;
