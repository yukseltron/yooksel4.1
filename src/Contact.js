import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
  render() {
    return (
		<div class="fade-in animate_animated animate__fadeInUp contact">
				<h3>
					If you want to reach out,<br/>here's my email and social media links.
					</h3>
				<div class="social-links">
                    <a href="mailto:h.yuksel04@gmail.com" target="_blank">
                    <div class="social-box">
    					<h1>email</h1>
                    </div>
                    </a>
                    <a href="https://github.com/yukseltron" target="_blank">
                    <div class="social-box">
                        <h1>github</h1>
                    </div>
                    </a>
                    <a href="https://dribbble.com/yukseltron" target="_blank">
                    <div class="social-box">
                        <h1>dribbble</h1>
                    </div>
                    </a>
                    <a href="https://www.behance.net/egggie" target="_blank">
                    <div class="social-box">
                        <h1>behance</h1>
                    </div>
                    </a>
                    <a href="https://thenounproject.com/yuks/" target="_blank">
                    <div class="social-box">
                        <h1>noun project</h1>
                    </div>
                    </a>
                    <a href="https://ca.linkedin.com/in/hyuks" target="_blank">
                    <div class="social-box">
                        <h1>linkedin</h1>
                    </div>
                    </a>
				</div>
		</div>
    );
  }
}

export default Contact;
