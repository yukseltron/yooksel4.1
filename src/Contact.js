import React, { Component } from "react";
import {Slide, Fade, LightSpeed} from 'react-reveal';
import './contact.css';

class Contact extends Component {
  render() {
    return (
		<div class="fade-in center-content contact">
        <br />
        <br />
        <br />
        <br />
                <Slide bottom>
                <div>
                    <h4>Feel free to reach out or explore my social media!</h4>
                    <a class="inline-a link" target="_blank" href="https://drive.google.com/file/d/1H-tHPjIP5dlZl9QtXDgoibdMZKjLbyDJ/view?usp=sharing">
                		In case you're looking for my resume.
                	</a>
                </div>
                </Slide>
                <br/>
                        <br/>
                                <br/>
                                        <br/>
                                                <br/>
				<div class="social-links spacer">
                    <a href="mailto:h.yuksel04@gmail.com" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
    					<h1>email</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://ca.linkedin.com/in/hyuks" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>linkedin</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://github.com/yukseltron" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>github</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://dribbble.com/yukseltron" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>dribbble</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://www.behance.net/egggie" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>behance</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://thenounproject.com/yuks/" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>noun project</h1>
                    </div>
                    </Fade>
                    </a>
                    <a href="https://medium.com/@yuks" target="_blank">
                    <Fade bottom cascade>
                    <div class="social-box">
                        <h1>medium</h1>
                    </div>
                    </Fade>
                    </a>
				</div>
		</div>
    );
  }
}

export default Contact;
