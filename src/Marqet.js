import LazyLoad from 'react-lazyload';
import './projects-style.css';
import frontIMG from './proj-fronts/marqet.png';
import challenge from './marqet/challenge.svg';
import solution from './marqet/solution.svg';
import research from './marqet/cryptopunks.png';
import persona from './marqet/persona.svg';
import ideation from './marqet/ideation.svg';
import midfi from './marqet/midfi.svg';
import hifi from './marqet/hifi2.svg';
import s1 from './marqet/s1.svg';
import s2 from './marqet/s2.svg';
import s3 from './marqet/s2.svg';
import specs from './marqet/specs.svg';
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
                      <img loading="lazy" src={solution}/>
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
                <div class="horizontal-section center-content">
                    <img class="img-m" alt="art work titled cryptopunks, generative art and among the first NFTs minted" src={research} />
                    <p>Cryptopunks were amongst the first NFTs made. It was a generative art project made by 2 people called Larva Labs. You can read more about them <a href="https://www.larvalabs.com/cryptopunks">in this article. </a></p>
                </div>
              </div>
  			<img class="spacer" loading="lazy"/>
              <div class="spacer">
      			<h2>Persona</h2>
                  <p class="p-center">Here's a persona for this project.</p>
                  <br/>
                  <br/>
                  <div class="horizontal-section center-content subtle-shadow">
                      <img class="padding img-m" src={persona} />
                        <div>
                          <h3 class="text-left">Hailey</h3>
                          <h4 class="text-left border-bottom">Art enthusiast, Crypto newcomer</h4>
                          <h5 class="text-left">Hailey has cryptocurrency in the form of ethereum, but doesn’t really know what to do with it. <br/><br/>She’s interested in art,
      and how they can be purchased as NFT’s,
      but she’s new to the overall process.</h5>
                        </div>
                  </div>
              </div>
              <div class="spacer">
                  <h2>Ideation</h2>
                  <br/>
                  <p class="center-content">I sketched possible ideas on how to implement a solution. Here is an example sketch of a task about viewing an art piece.</p>
                  <br/>
                  <br/>
                <img loading="lazy" src={ideation}/>
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
                <br/>
                <br/>
                <img loading="lazy" src={midfi}/>
            </div>
            <div class="spacer final-design-section">
                <h2>Hifi</h2>
                <p class="p-center">Next up, I designed a hi-fidelity prototype.</p>
                <img loading="lazy" src={hifi}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p class="p-center">Here is the design and accessibility specifications I arranged for it.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <img loading="lazy" class="img-s" src={specs}/>
                <br/>
                <br/>
                <br/>
            </div>
            <div class="spacer">
                <div class="spacer">
                    <div>
                        <h2 class="center-content p-left">Artwork Info</h2>
                        <h4 class=" center-content storyboard-h4">In this scenario, our user wants to find an artwork of interest,
learn more about it, and decide
to keep it on a watch list.</h4>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img loading="lazy" class="spacer img-l" src={s1} />
                </div>
                <div class="spacer">
                    <div>
                        <h2 class="center-content p-left">Auctions</h2>
                        <h4 class="center-content  storyboard-h4">Here, our user found an interesting piece of art
and now wants to place a bid to buy it
in auction.</h4>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img loading="lazy" class="spacer img-l" src={s2}/>
                </div>
                <div class="">
                    <div>
                        <h2 class="center-content  p-left">Adjust Privacy</h2>
                        <h4 class="center-content  storyboard-h4">Now our user wants to adjust the privacy
settings for an art piece in her collection.
She wants it to be hidden from the public.</h4>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img loading="lazy" class="img-l" src={s3}/>
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
                <h4 class="p-center"><a target="_blank" href="https://www.figma.com/file/kXyfQVuJfCT81cC5NLzLNg/A2?node-id=0%3A1">View on figma</a></h4>
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
                <p>In terms of enivormental impact, it was interesting to learn about Proof of Work vs Proof of Stake in crypto transactions. Proof of stake has promise in terms of being more energy efficient, and is seeing widespread usage.</p>
                <p>Although cryptocurrencies generally pose a terrible risk in terms of the environmental cost that comes with them, proof of stake mining could help overcome that.</p>
                <p>However, time will tell how the larger art world will react to NFTs as they become more and more popular.</p>
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
