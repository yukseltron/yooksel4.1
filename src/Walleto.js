import LazyLoad from 'react-lazyload';
import {Slide, Fade, LightSpeed} from 'react-reveal';
import './projects-style.css';
import main from './walleto/landing.svg';
import challenge from './walleto/challenge.svg';
import solution from './walleto/solution.svg';
import moodBoard from './walleto/mood.svg';
import persona from './walleto/persona.svg';
import journey from './walleto/journey.svg';
import sketches from './walleto/walleto-sketches.png';
import midfi from './walleto/midfi.svg';
import scenario1 from './walleto/scenario1.svg';
import scenario2 from './walleto/scenario2.svg';
import scenario3 from './walleto/scenario3.svg';
import hifi from './walleto/hifi.svg';
import s1 from './walleto/scenario1.gif';
import s2 from './walleto/scenario2.gif';
import s3 from './walleto/scenario3.gif';
import chart from './walleto/chart.png';
import access from './walleto/access.svg';
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


class Walleto extends Component {
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
      <LazyLoad placeholder={<img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"/>}>
      <Fade top cascade>
            <div>
    	  	<h1 ref={this.myDivToFocus}>Walleto</h1>
    		<h4 class="p-center">2021</h4>
    	  	<h4 class="subtitle">A practical crypto wallet</h4>
            </div>
       </Fade>
		<div class="spacer">
        <Fade bottom>
            <div>
            <img class="subtle-shadow" src={main}/>
            </div>
        </Fade>
		</div>
        <div class="background-info border-top">
            <div class="my-info center-content">
                <Slide bottom>
                    <div>
                    <div class="role-info">
                        <div>
                            <h2>Topic</h2>
                            <p>Cryptocurrency</p>
                        </div>
                        <br/>
                        <div>
                            <h2>Tools I Used</h2>
                            <p>Figma<br/>Adobe illustrator</p>
                        </div>
                    </div>
                    </div>
                </Slide>
                <br/>
                <Slide bottom>
                <div>
                <div class="background-info">
                    <h4>For: Cryptocurrency Users<br/>(Hypothetical)</h4>
                    <h4>Platform: Web</h4>
                    <h4>Jan 2020 (1 week)</h4>
                </div>
                </div>
                </Slide>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Slide bottom>
            <div>
            <h3>Overview</h3>
            <p class="center-content spacer">Cryptocurrencies and applications with blockchain technologies are growing and so are the need for online tools and uses for crypto. As such, a simple way to get into crypto trading is needed for people new to the crypto world, but curious to learn more about it.</p>
            </div>
            </Slide>
        </div>
        <br/>
        <br/>
        <div class="spacer border-top" ref={this.div1}>
            <Slide bottom>
            <h3>Introduction</h3>
            </Slide>
            <div>
                <div>
                    <div class="horizontal-section">
                        <Slide left>
                        <img class="img-s" loading="lazy" class="problem" src={challenge}/>
                        </Slide>
                        <Slide bottom>
                        <div>
                            <h2>The Challenge</h2>
                            <p class="p-left center-content">The focus on the project was to develop a sort of financial website. I chose to design a website for tracking and trading cryptocurrency for a chance to learn more about it.</p>
                        </div>
                        </Slide>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <Slide bottom>
                <div>
                    <h2>The Solution</h2>
                    <br/>
                    <div class="solution-sector spacer center-content">
                        <div class="solution-info">
                            <div>
                                <h4>Walleto is a crypto wallet that focuses on practicality by showing gains/losses and transaction histories in your accounts, as well as allowing for easy transfering to contacts.</h4>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Fade right>
                        <div>
                            <img loading="lazy" src={solution}/>
                        </div>
                        </Fade>
                    </div>
                </div>
            </Slide>
        </div>
        <div class="border-top section spacer" ref={this.div2}>
            <Slide bottom>
                <div>
        			<h3>Research</h3>
                    <p class="center-content">Cyrptocurrencies are growing massively in popularity, yet they still seem to remain enigmatic to understand. Doing secondary research for this project, there were a lot of confusing concepts that often needed thorough explaining to understand. However, what can be seen for certain, is that people want to have metrics on their portfolio readily available.</p>
                    <br/>

            	  	<br/>
                </div>
            </Slide>
            <Fade left>
            <div>
                                <h2>Mood Board</h2>
			         <img class="spacer" loading="lazy" src={moodBoard}/>
            </div>
            </Fade>
            <Slide bottom>
                <div>
                <div class="spacer">
        			<h2>Persona</h2>
                    <p class="center-content">Here's a persona for this project, made from an interview with a person with crypto accounts and through secondary research.</p>
                    <br/>
                    <br/>
                    <Fade right>
                    <div>
        			         <img loading="lazy" class="subtle-shadow" src={persona}/>
                    </div>
                    </Fade>
                </div>
                </div>
            </Slide>
            <div class="needs-section spacer center-content">
                <Slide bottom>
                <div>
                    <h2>The Needs</h2>
                    <p>What could our user need for a crypto wallet site?</p>
                    <Slide bottom>
                    <div>
                        <div class="needs">
                            <h1>1.</h1>
                            <h4 class="h-left">Be able to assess accounts and see how crypto prices are affecting them.</h4>
                        </div>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                    <div class="needs">
                        <h1>2.</h1>
                        <h4 class="h-left">A way to quickly and easily send crypto between accounts or to people.</h4>
                    </div>
                    </div>
                    </Slide>
                    <Slide bottom>
                    <div>
                    <div class="needs spacer">
                        <h1>3.</h1>
                        <h4 class="h-left">A way to see and organize their portfolio and transactions history.</h4>
                    </div>
                    </div>
                    </Slide>
                </div>
                </Slide>
            </div>
            <Slide bottom>
            <div>
                <div class="spacer">
        			<h2>Journey Mapping</h2>
                    <br/>
                    <div>
                        <p class="center-content">I made journey maps as well to better understand what our user might go through. This journey map is for a scenario where our user sends money to a contact.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Fade left>
                        <div>
                            <img class="img-l" loading="lazy" src={journey}/>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div>
                <div class="spacer">
                    <h2>Ideation</h2>
                    <br/>
                    <p class="p-center">Sketches for ideas and concepts to help users manage their crypto assets.</p>
                    <Fade right>
                    <div>
                        <img loading="lazy" src={sketches}/>
                    </div>
                    </Fade>
                </div>
            </div>
            </Slide>
		</div>
		<div class="section border-top spacer">
            <Slide bottom>
            <div>
                <div class="spacer">
        			<h3>Prototyping</h3>
                    <h2>Midfi</h2>
                    <p class="p-center">With the research I had done, I made some midfi screens to better test out the ideas.</p>
                    <Fade left>
                    <div>
                        <img loading="lazy" src={midfi}/>
                    </div>
                    </Fade>
                </div>
            </div>
            </Slide>
            <div class="spacer">
                <Slide bottom>
                <div>
                    <h2>User Scenarios</h2>
                </div>
                </Slide>
                <Slide bottom>
                    <div>
                        <p class="center-content">Here are midfi user flows I made for 3 different tasks.</p>
                        <h4>1. Viewing Transactions</h4>
                        <h4>2. Sending Crypto</h4>
                        <h4>3. Setting a Price Alert</h4>
                    </div>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Slide bottom>
                    <div>
                        <div class="scenario-section">
                            <div>
                            <h4>Viewing Transactions</h4>
                            <p class="center-content">To start, our user wants to see the transactions history for a specific cryptocurrency they have.</p>
                            </div>
                            <br/>
                            <br/>
                            <Fade left>
                            <div>
                                <img loading="lazy" class="img-ml" src={scenario1}/>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    </Slide>
                    <br/>
                    <br/>
                    <Slide bottom>
                    <div>
                        <div class=" scenario-section">
                            <Slide bottom>
                            <div>
                                <h4>Sending Crypto</h4>
                                <p class="center-content">In this scenario, our user wants to schedule a money transfer to a friend of theirs.</p>
                            </div>
                            </Slide>
                            <br/>
                            <br/>
                            <Fade right>
                            <div>
                                <img loading="lazy" class="img-ml" src={scenario2}/>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    </Slide>
                    <br/>
                    <br/>
                    <Slide bottom>
                    <div>
                        <div class="scenario-section">
                            <Slide bottom>
                            <div>
                                <h4>Setting a Price Alert</h4>
                                <p class="center-content">Lastly, our user wants to set an alert for a crypto in case it reaches a certain price.</p>
                            </div>
                            </Slide>
                            <br/>
                            <br/>
                            <Fade left>
                            <div>
                                <img loading="lazy" class="img-ml" src={scenario3}/>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
            <div class="spacer border-top final-design-section">
                <Slide bottom>
                <div>
                    <h3>Final Design</h3>
                </div>
                </Slide>
                <Fade right>
                <div>
                    <img loading="lazy" src={hifi}/>
                </div>
                </Fade>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Slide bottom>
                <div>
                    <p class="p-center">Next up, I designed a hi-fidelity prototype.</p>
                    <p class="p-center">Here is the design and accessibility specifications made for it.</p>
                </div>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade left>
                <div>
                    <img loading="lazy" class="img-l" src={access}/>
                </div>
                </Fade>
                <br/>
                <br/>
                <br/>
            </div>
            <div class="spacer">
                <Slide bottom>
                <div>
                    <div class="horizontal-section">
                        <div>
                            <h2 class="p-left">Viewing Transactions</h2>
                            <h4 class="storyboard-h4">See your crypto account's transaction history and scheduled transactions.</h4>
                        </div>
                        <img loading="lazy" class="subtle-shadow" src={s1}/>
                    </div>
                </div>
                </Slide>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Slide bottom>
                <div>
                <div class="horizontal-section">
                    <div>
                        <h2 class="p-left">Sending Crypto</h2>
                        <h4 class="storyboard-h4">Quickly send or schedule crypto transfers.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow" src={s2}/>
                </div>
                </div>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Slide bottom>
                <div>
                    <div class="horizontal-section spacer">
                        <div>
                            <h2 class="p-left">Setting a Price Alert</h2>
                            <h4 class="storyboard-h4">Get notified for optimal trading when cryptos reach your desired prices.</h4>
                        </div>
                        <img loading="lazy" class="subtle-shadow" src={s3}/>
                    </div>
                </div>
                </Slide>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Slide bottom>
            <div>
                <div class="border-bottom border-top spacer">
                    <h2 class="p-center">Check it out</h2>
                    <h4 class="p-center"><a target="_blank" href="https://www.figma.com/file/G5kmU9JP0DI3rG5kEBJoRS/A1?node-id=0%3A1">View on figma</a></h4>
                </div>
            </div>
            </Slide>
            <br/>
            <br/>
            <br/>
            <Slide bottom>
            <div>
                <div class="center-content">
        			<h2>Reflection</h2>
                    <p>Looking back, this project was a learning opportunity for understanding more about cryptocurrencies, NFTs, and blockchains.</p>
                    <p>As cool as the technology seems however, I also learned about the toll they have on the environment.</p>
                    <p>This can be seen in the chart below, showing the increasing energy consumption needed for bitcoin mining over time.</p>
                    <img class="img-l" loading="lazy" src={chart}/>
                    <p class="p-center">Chart taken from <a target="_blank" href="http://climatestate.com/2013/07/11/the-rise-of-digital-currency-like-bitcoin-and-carbon-footprints/">this site.</a></p>
                    <p>For the future, it'd be interesting to maybe track environmental impact metrics as well for the user, in order to promote more environmentally-friendly trading and crypto.</p>
                </div>
            </div>
            </Slide>
            <br/>
            <br/>
            <br/>
            <h2><a class="spacer" onClick={this.handleOnClick}>Return to top</a></h2>
        </LazyLoad>
	  </div>
    );
  }
}

export default Walleto;
