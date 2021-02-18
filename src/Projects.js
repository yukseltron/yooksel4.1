import React, { Component } from "react";
import './projects.css';

class Projects extends Component {
  render() {
    return (
		<div class="fade-in" id="projects">
			<div class="container UX" onclick="onNavigate('/project-improvingquercus'); return false;">
				<a href="https://www.behance.net/gallery/111653313/Improving-Quercus" target="_blank">
					<div class="info centered" id="project1">
						<h2>Improving Quercus</h2>
						<h3>UX Case Study</h3>
						<p>Helping university students with online learning and group formation.</p>
					</div>
					<div class="img-container">
						<img class="animate__animated animate__fadeInDown" id="quercus" src="quercus.svg"/>
					</div>
				</a>
			</div>
			<div class="container Code" onclick="onNavigate('/project-randomstringgenerator'); return false;">
				<a href="https://github.com/yukseltron/Probabilistic-Random-String-Generator" target="_blank">
					<div class="info centered" id="project1">
						<h2>Random String Generator</h2>
						<h3>Compiler</h3>
						<p>Generating well-typed random sentences using grammars and probabilities.</p>
					</div>
					<div class="img-container">
						<img class="animate__animated animate__fadeInDown" id="rsg" src="rsg.svg"/>
					</div>
				</a>
			</div>
			<div class="container Code" onclick="onNavigate('/project-virtualassistancebot'); return false;">
				<a href="https://github.com/yukseltron/bot-factory" target="_blank">
					<div class="info centered" id="project1">
						<h2>Virtual Assistance Bot</h2>
						<h3>VR Project</h3>
						<p>A configurable bot for guiding people in virtual reality experiments.</p>
					</div>
					<div class="img-container">
						<img class="animate__animated animate__fadeInDown" src="vrbot.svg"/>
					</div>
				</a>
			</div>
		    <div class="container UX" onclick="onNavigate('/project-routes-app'); return false;">
		        <a href="" target="_blank">
		            <div class="info centered" id="project1">
		                <h2>Routes App</h2>
		                <h3>UI Mockup</h3>
		                <p>A way to gain metrics from your commutes/trips</p>
		            </div>
		            <div class="img-container">
		                <img class="animate__animated animate__fadeInDown" src="routes-app.svg"/>
		            </div>
		        </a>
		    </div>
		    <div class="container Writing" onclick="onNavigate('/project-monodrift'); return false;">
		        <a href="" target="_blank">
		            <div class="info centered" id="project1">
		                <h2>Mono Drift</h2>
		                <h3>Short Stories</h3>
		                <p>The singularity approaches, and the consequences are felt by all.</p>
		            </div>
		            <div class="img-container">
		                <img class="animate__animated animate__fadeInDown" src="monodrift.svg"/>
		            </div>
		        </a>
		    </div>
		    <div class="container Art" onclick="onNavigate('/project-uvc'); return false;">
		        <a href="https://github.com/yukseltron/Josephus-Problem" target="_blank">
		            <div class="info centered" id="project1">
		                <h2>UVC</h2>
		                <h3>Album Art</h3>
		                <p>Cover arts for the debut EP and singles of UltraViolet Catastrophe</p>
		            </div>
		            <div class="img-container">
		                <img class="animate__animated animate__fadeIn" src="https://i.imgur.com/57z5Kg0.png"/>
		            </div>
		        </a>
		    </div>
			<div class="container Code">
				<a href="https://github.com/yukseltron/Josephus-Problem" target="_blank">
					<div class="info centered" id="project1">
						<h2>The Josephus Problem</h2>
						<h3>Web App</h3>
						<p>A visualization of the math puzzle solution</p>
					</div>
					<div class="img-container">
						<img class="animate__animated animate__fadeIn" src="jp.svg"/>
					</div>
				</a>
			</div>
		</div>
    );
  }
}

export default Projects;
