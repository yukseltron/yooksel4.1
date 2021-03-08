import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
  render() {
    return (
		<div class="fade-in animate_animated animate__fadeInUp contact">
				<h1>
					If you want to reach out,<br/>here's my contact info<br/>and some social media links.
					</h1>
				<div class="social-links">
                    <a href="mailto:h.yuksel04@gmail.com" target="_blank">
                    <div class="social-box">
    					<h3>email</h3>
                    </div>
                    </a>
                    <a href="https://github.com/yukseltron" target="_blank">
                    <div class="social-box">
                        <h3>github</h3>
                    </div>
                    </a>
                    <a href="https://dribbble.com/yukseltron" target="_blank">
                    <div class="social-box">
                        <h3>dribbble</h3>
                    </div>
                    </a>
                    <a href="https://www.behance.net/egggie" target="_blank">
                    <div class="social-box">
                        <h3>behance</h3>
                    </div>
                    </a>
                    <a href="https://thenounproject.com/yuks/" target="_blank">
                    <div class="social-box">
                        <h3>noun project</h3>
                    </div>
                    </a>
                    <a href="https://ca.linkedin.com/in/hyuks" target="_blank">
                    <div class="social-box">
                        <h3>linkedin</h3>
                    </div>
                    </a>
				</div>
		</div>
    );
  }
}

export default Contact;
