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
	  	<h1 ref={this.myDivToFocus}>Walleto</h1>
		<h4 class="p-center">2021</h4>
	  	<h4 class="subtitle">A practical crypto wallet</h4>
		<div class="border-bottom spacer">
            <img class="subtle-shadow" src={main}/>
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
		</div>
        <br/>
        <div class="background-info spacer">
            <div class="my-info">
                <div class="role-info">
                    <div>
                        <h2>Topic</h2>
                        <p>Cryptocurrency</p>
                    </div>
                    <br/>
                    <div>
                        <h2>Tools Used</h2>
                        <p>Figma<br/>Adobe illustrator</p>
                    </div>
                </div>
                <br/>
                <div class="background-info">
                    <h4>For: Cryptocurrency Users<br/>(Hypothetical)</h4>
                    <h4>Platform: Web</h4>
                    <h4>Jan 2020 (1 week)</h4>
                </div>
                <br/>
            </div>
            <br/>
        </div>
        <br/>
        <p class="border-bottom border-top spacer">
            <h4 class="p-center"><a target="_blank" href="https://dribbble.com/shots/15291623-Walleto">View dribbble shot</a></h4>
        </p>
        <br/>
        <div class="border-bottom spacer" ref={this.div1}>
            <div class="circlebox">
                <div class="div1 filled"></div>
                <div class="div2"></div>
                <div class="div3"></div>
                <div class="div4"></div>
            </div>
            <h3>Overview</h3>
            <p class="p-center">Cryptocurrencies and applications with blockchain technologies are growing and so are the need for online tools and uses for crypto.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <div>
                    <h2>The Challenge</h2>
                    <br/>
                    <div class="problem-section spacer">
                        <img class="problem" src={challenge}/>
                        <div>
                            <p class="p-left">The focus on the project was to develop a sort of financial website. I chose to design website for tracking and trading cryptocurrency for a chance to learn more about it.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="needs-section spacer center-content">
                    <h2>The Needs</h2>
                    <p>What could our user need for a crypto wallet site?</p>
                    <div class="needs">
                        <h1>1.</h1>
                        <h4 class="h-left">Be able to assess accounts and see how crypto prices are affecting them.</h4>
                    </div>
                    <div class="needs">
                        <h1>2.</h1>
                        <h4 class="h-left">A way to quickly and easily send crypto between accounts or to people.</h4>
                    </div>
                    <div class="needs spacer">
                        <h1>3.</h1>
                        <h4 class="h-left">A way to see and organize their portfolio and transactions history.</h4>
                    </div>
                </div>
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
                    <img src={solution}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div class="border-bottom section spacer" ref={this.div2}>
            <div class="circlebox">
                <div class="div1"></div>
                <div class="div2 filled"></div>
                <div class="div3"></div>
                <div class="div4"></div>
            </div>
            <div class="spacer">
    			<h3>Research</h3>
                <p>Doing some secondary research suggests that as crypto has grown massively in popularity, markets have emerged that try to sell things through crypto. Sometimes the things they sell are encrypted in a blockchain too as NFTs. Virtually any sort of file can be authenticated 'minted' to become an NFT.</p>
                <p>Example of a crypto market:<a target="_blank" href="https://foundation.app/">foundation.app</a></p>
                <p>Example of an NFT market:<a target="_blank" href="https://www.nbatopshot.com/">nbatopshot.com</a></p>
                <br/>
        	  	<br/>
                <h2>Mood Board</h2>
    			<img src={moodBoard}/>
            </div>
            <br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
    			<h2>Persona</h2>
                <p class="p-center">Here's a persona for this project.</p>
                <br/>
                <br/>
    			<img class="subtle-shadow" src={persona}/>
            </div>
		  	<br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
    			<h2>Journey Mapping</h2>
                <br/>
                <div class="horizontal-section">
                    <p>I made journey maps as well to better understand what our user might go through. This journey map is for a scenario where our user sends money to a contact.</p>
                    <img src={journey}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
                <h2>Ideation</h2>
                <br/>
                <p class="p-center">Sketches for ideas and concepts on ideas to help users manage their crypto assets.</p>
                <img src={sketches}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
		</div>
        <div class="circlebox" ref={this.div4}>
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3 filled"></div>
            <div class="div4"></div>
        </div>
		<div class="section spacer">
        <br/>
            <div class="spacer">
    			<h3>Prototyping</h3>
                <h2>Midfi</h2>
                <p class="p-center">With the research I had done, I made some midfi screens to better test out the ideas.</p>
    			<img src={midfi}/>
            </div>
            <br/>
			<br/>
            <br/>
			<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
                <h2>User Scenarios</h2>
                <br/>
                <div>
                    <div class="horizontal-section scenario-section border-bottom">
                        <p>Viewing their transactions history for a specific cryptocurrency they have.</p>
                        <img class="img-ml" src={scenario1}/>
                    </div>
                    <br/>
                    <br/>
                    <div class="horizontal-section scenario-section border-bottom">
                        <p>Here, a user wants to schedule a money transfer to a friend of theirs.</p>
                        <img class="img-ml" src={scenario2}/>
                    </div>
                    <br/>
                    <br/>
                    <div class="horizontal-section scenario-section border-bottom">
                        <p>In this scenario, our user wants to set an alert for a crypto in case it reaches a certain price.</p>
                        <img class="img-ml" src={scenario3}/>
                    </div>
                </div>
            </div>
        </div>
            <div class="circlebox" ref={this.div5}>
                <div class="div1" onClick={this.div1}></div>
                <div class="div2" onClick={this.div2}></div>
                <div class="div3" onClick={this.div3}></div>
                <div class="div4 filled" onClick={this.div4}></div>
            </div>
            <br/>
            <div class="spacer final-design-section">
                <h3>Final Design</h3>
                <img src={hifi}/>
                <p class="p-center">Next up, I designed a hi-fidelity prototype.</p>
                <p class="p-center">Here is just the design specifications made for it.</p>
                <br/>
                <br/>
                <br/>
                <img class="img-l" src={access}/>
                <p class="p-center">Some main user flow interactions are shown below.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
                <div class="horizontal-section">
                    <div>
                        <h2 class="p-left">Viewing Transactions</h2>
                        <h4 class="storyboard-h4">See your crypto's history.</h4>
                    </div>
                    <img class="subtle-shadow" src={s1}/>
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
                <br/>
                <div class="horizontal-section">
                    <div>
                        <h2 class="p-left">Setting a Price Alert</h2>
                        <h4 class="storyboard-h4">Get notified for optimal trading.</h4>
                    </div>
                    <img class="subtle-shadow" src={s3}/>
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
                <div class="horizontal-section">
                    <div>
                        <h2 class="p-left">Sending Crypto</h2>
                        <h4 class="storyboard-h4">Quickly send or schedule crypto transfers.</h4>
                    </div>
                    <img class="subtle-shadow" src={s2}/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer">
    			<h2>Reflection</h2>
                <p>Looking back, this project was a learning opportunity for understanding more about cryptocurrencies, NFTs, and blockchains.</p>
                <p>As cool as the technology seems however, I also learned about the environmental toll they have on the environment.</p>
                <img src={chart}/>
                <p class="p-center">Chart taken from <a target="_blank" href="http://climatestate.com/2013/07/11/the-rise-of-digital-currency-like-bitcoin-and-carbon-footprints/">this site.</a></p>
                <p>For the future, it'd be interesting to maybe track environmental impact metrics as well for the user, in order to promote more environmentally-friendly trading and crypto.</p>
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

export default Walleto;
