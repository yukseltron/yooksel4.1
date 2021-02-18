import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
  render() {
    return (
		<div class="fade-in animate_animated animate__fadeInUp">
				<p>
					If you want to reach out, here's my contact info and some social media links.
					</p>
				<div class="social-links">
					<a href="mailto:h.yuksel04@gmail.com" target="_blank">email</a>
					<a href="https://github.com/yukseltron" target="_blank">github</a>
					<a href="https://dribbble.com/yukseltron" target="_blank">dribbble</a>
					<a href="https://www.behance.net/egggie" target="_blank">behance</a>
					<a href="https://thenounproject.com/yuks/" target="_blank">noun project</a>
					<a href="https://ca.linkedin.com/in/hyuks" target="_blank">linkedin</a>
				</div>
		</div>
    );
  }
}

export default Contact;
