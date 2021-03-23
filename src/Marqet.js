import LazyLoad from 'react-lazyload';
import './projects-style.css';
import frontIMG from './proj-fronts/marqet.png';
import challenge from './marqet/challenge.svg';
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


class Marqet extends Component {
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
                <title>Marqet</title>
          <h1 ref={this.myDivToFocus}>Marqet</h1>
          <h4 class="p-center">2021</h4>
          <h4 class="subtitle">Find art authenticated on a blockchain</h4>
          <div>
		  <img  class="img-l" loading="lazy" src={frontIMG}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div class="background-info border-top border-bottom">
              <div class="my-info">
                  <div class="role-info">
                      <div>
                          <h2>Topic</h2>
                          <p>Cryptocurrency</p>
                      </div>
                      <br/>
                      <div>
                          <h2>Tools I Used</h2>
                          <p>Figma</p>
                      </div>
                  </div>
                  <br/>
                  <div class="background-info">
                      <h4>For: Art Enthusiasts<br/>(Hypothetical)</h4>
                      <h4>Platform: Mobile</h4>
                      <h4>March 2020 (1 week)</h4>
                  </div>
                  <br/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <h3>Overview</h3>
              <p class="center-content spacer">Marqet was inspired by art markets that are available online, but are somewhat complex to the average user since it deals with stuff such as crypto currencies, blockchain, hashes, and more. An easier to understand market place, meant for simply auctioning, browsing, buying/selling, and showcasing collections, would be different to the existing crypto markets that remain ‘cryptic’ (not showing identities, collections, limited socializing). Although this is intentional to create a more anonymous ecosystem, it can be scary to newcomers. So, Marqet’s usefulness is in trying to appeal to newcomers interested in understand more of the crypto world and its practicalities.</p>
          </div>
          <div class="border-bottom spacer" ref={this.div1}>
              <div class="circlebox">
                  <div class="div1 filled"></div>
                  <div class="div2"></div>
                  <div class="div3"></div>
              </div>
              <h3>Introduction</h3>
              <br/>
              <br/>
              <br/>
              <div>
                  <div>
                      <div class="problem-section spacer">
                          <img class="img-s" loading="lazy" class="problem" src={challenge}/>
                          <div>
                              <h2>The Challenge</h2>
                              <p class="p-left center-content">How can we provide a mobile art market for any art enthusiast wondering what they can do with their crytpo funds?</p>
                          </div>
                      </div>
                  </div>
                  <div class="needs-section spacer center-content">
                      <h2>The Needs</h2>
                      <br/>
                      <p>What could our user need for a crypto-art market app?</p>
                      <div class="needs">
                          <h1>1.</h1>
                          <h4 class="h-left">Be able to place bids on crypto art.</h4>
                      </div>
                      <div class="needs">
                          <h1>2.</h1>
                          <h4 class="h-left">View and adjust their <a target="_blank" href="https://en.wikipedia.org/wiki/Non-fungible_token">Non-Fungible Tokens</a> collection. These are digital items authenticated through blockchain technology that certifies a digital item is unique.</h4>
                      </div>
                      <div class="needs spacer">
                          <h1>3.</h1>
                          <h4 class="h-left">A way to learn more information about a crypto art piece.</h4>
                      </div>
                  </div>
              </div>
              <div>
                  <h2>The Solution</h2>
                  <br/>
                  <div class="solution-sector spacer center-content">
                      <div class="solution-info">
                          <div>
                              <h4>Marqet is a crypto art market and auction mobile app for art ethusiasts figuing out more about crypto.</h4>
                          </div>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <img loading="lazy"/>
                  </div>
              </div>
          </div>
          <div class="border-bottom section spacer" ref={this.div2}>
              <div class="circlebox">
                  <div class="div1"></div>
                  <div class="div2 filled"></div>
                  <div class="div3"></div>
              </div>
              <div>
      			<h3>Research</h3>
                  <p class="center-content">Doing some secondary research suggests that as crypto has grown massively in popularity, markets have emerged that try to sell things through crypto. Sometimes the things they sell are encrypted in a blockchain too as NFTs. Virtually any sort of file can be authenticated 'minted' to become an NFT.</p>
                  <br/>
                  <p class="center-content">Example of a NFT: <a target="_blank" href="https://gomint.me/query/?testnet&tokenId=0.0.453324">I made this NFT as an experiment</a></p>
                  <p class="center-content">Example of an NFT market: <a target="_blank" href="https://www.nbatopshot.com/">nbatopshot.com</a></p>
                  <br/>
          	  	<br/>
              </div>
  			<img class="spacer" loading="lazy"/>
              <div class="spacer">
      			<h2>Persona</h2>
                  <p class="p-center">Here's a persona for this project.</p>
                  <br/>
                  <br/>
      			<img loading="lazy" class="subtle-shadow"/>
              </div>
              <div class="spacer">
      			<h2>Journey Mapping</h2>
                  <br/>
                  <div>
                      <p class="center-content">This journey map is for a scenario where our user wants to place a bid on an art piece.</p>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <img class="img-l" loading="lazy"/>
                  </div>
              </div>
              <div class="spacer">
                  <h2>Ideation</h2>
                  <br/>
                  <p class="p-center">Sketches for ideas and concepts on ideas to help users with their crypto art.</p>
                  <img loading="lazy"/>
              </div>
  		</div>
        <div class="circlebox" ref={this.div4}>
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3 filled"></div>
        </div>
		<div class="section spacer">
        <br/>
            <div class="spacer">
    			<h3>Prototyping</h3>
                <h2>Midfi</h2>
                <p class="p-center">With the research I had done, I made some midfi screens to better test out the ideas.</p>
    			<img loading="lazy"/>
            </div>
            <div class="spacer final-design-section">
                <h2>Hifi</h2>
                <p class="p-center">Next up, I designed a hi-fidelity prototype.</p>
                <img loading="lazy" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p class="p-center">Here is just the design specifications made for it.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <img loading="lazy" class="img-l"/>
                <br/>
                <br/>
                <br/>
            </div>
            <div class="spacer">
                <div class="horizontal-section">
                    <div>
                        <h2 class="p-left">Artwork Info</h2>
                        <h4 class="storyboard-h4">Find out all the meta-information you need about the crypto art piece.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow" />
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
                        <h2 class="p-left">Auctions</h2>
                        <h4 class="storyboard-h4">Place a bid to try and buy and artwork of your interest.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow"/>
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
                        <h2 class="p-left">Adjust Privacy</h2>
                        <h4 class="storyboard-h4">You determine who sees what part of your art collection.</h4>
                    </div>
                    <img loading="lazy" class="subtle-shadow"/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="border-bottom border-top spacer">
                <h2 class="p-center">Check it out</h2>
                <h4 class="p-center"><a target="_blank" href="https://www.figma.com/file/G5kmU9JP0DI3rG5kEBJoRS/A1?node-id=0%3A1">View on figma</a></h4>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="spacer center-content">
                <h2>Reflection</h2>
                <p>This was a fun project for learning more about NFTs, and blockchains.</p>
                <p>In terms of enivormental impact, it was interesting to learn about Proof of Work vs Proof of Stake in crypto transactions.</p>
                <p>Cryptocurrencies pose a terrible risk in terms of the environmental cost that comes with them.</p>
                <p>Crypto technologies focusing on proof of stake however, show promise in alleviating their environmental toll.</p>
                <p>As such, for the future, it would be good to focus on adding more socially-conscious aspects such as the carbon footprint of a crypto artwork.</p>
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
        </div>

    );
  }
}

export default Marqet;
