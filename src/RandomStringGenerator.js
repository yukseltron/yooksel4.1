import './projects-style.css';
import frontIMG from './proj-fronts/rsg-front.svg';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';


class RandomStringGenerator extends Component {
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
          <h1 ref={this.myDivToFocus}>Random String Generator</h1>
          <h4 class="p-center">2020</h4>
          <h4 class="subtitle">Generating random strings using grammars and probability</h4>
          <div class="border-bottom">
          <img loading="lazy" class="spacer" src={frontIMG}/>
          </div>
          <div class="background-info">
  			<div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>In collaboration with</h2>
                          <p>
                              <a href="https://www.kaelbosland.com/">Kael Boseland</a> and <a href="https://github.com/Chen2x">Chen Chen</a>.
                          </p>
                      </div>
                      <div>
                          <h2>My role</h2>
                          <p>Python Developer<br/>Project Manager<br/>Graphic Designer</p>
                      </div>
                      <br/>
                      <div>
                          <h2>Tools Used</h2>
                          <p>Python<br/>Adobe InDesign</p>
                      </div>
                  </div>
  				<br/>
                  <div class="background-info">
                      <h4>For: McMaster University<br/>(Hypothetical)</h4>
                      <h4>Platform: Python-based compiler</h4>
                      <h4>Jan-April 2020</h4>
                  </div>
                  <br/>
  			</div>
              <br/>
  		</div>
          <br/>
          <p class="border-bottom border-top spacer">
              <h4 class="p-center"><a target="_blank" href="https://github.com/yukseltron/Probabilistic-Random-String-Generator/blob/master/documentation/GrammarTools.md">View documentation on github</a></h4>
              <h4 class="p-center"><a target="_blank" href="https://github.com/yukseltron/Probabilistic-Random-String-Generator">View source code on github</a></h4>
          </p>
          <br/>
          <div class="spacer" ref={this.div1}>
              <div class="center-content">
                  <h3>Abstract</h3>
                  <p>This was a final year project for a computer compilers course. The goal was to create a random string generator for context sensitive (and thereby, also context free) grammars. However, we also needed to add the ability to manipulate probabilities for productions and ensure the output was well typed. We were successfully able to create and test a compiler for reading both context sensitive and context free grammars. We also were able to implement editable probabilities and ensure well typing. For the future, it would be good to extend where probabilities could be added, and work on improving time efficiency.</p>
              </div>
              <br/>
          </div>
          <div class="spacer">
                <div class="center-content">
                  <h3>My Contributions</h3>
                    <p>I built the class for modeling context sensitive grammars, including its parsing algorithms. I also wrote the associated random string generation methods with weighted probabilities for context sensitive grammars.</p>
                    <p>As well, I was the project manager for this project. My responsibilities were for organizing the team, delegating tasks, ensuring milestones are met, and maintaining a cohesive and cooperative team.</p>
                </div>
          </div>
          <div class="spacer">
              <div class="center-content">
                    <h3>Randomly Generated Poetry</h3>
                    <p class="p-center">These are some of the poems made by the compiler.</p>
                    <br/>
                    <pre class="text-left">
                    <br/>
                    the ocean reviles at the mellow volcano<br/>
                    reprimands by Earth<br/>
                    relaxes at the dark flower<br/>
                    relaxes like Earth<br/>
                    smiles above
                    <br/><br/>
                    </pre>
                    <pre class="text-right">
                    <br/>
                    a bright flower<br/>
                    smiles against<br/>
                    the tsunami<br/>
                    <br/>
                    </pre>
                    <pre class="text-left">
                    <br/>
                    the rough tsunami,<br/>
                    the ocean smiles before a ocean<br/>
                    reviles above El Dorado<br/>
                    smiles against<br/>a green crevace<br/>
                    <br/>
                    </pre>
                    <pre class="text-right">
                    <br/>
                    a bright volcano<br/>
                    resides before the fiery ocean
                    <br/><br/>
                    </pre>
              </div>
          </div>
          <div class="spacer">
            <div class="center-content">
                  <h3>Reflection</h3>
                  <p>This project was a challenge to program. Context-sensitive grammars are tricky to model. I ended up learning a lot about programmgin languages, their syntax and semantics. It was fun to build and took some effort.</p>
            </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h2><a onClick={this.handleOnClick}>Return to top</a></h2>
          </div>
        </div>
    );
  }
}

export default RandomStringGenerator;
