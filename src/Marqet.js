import LazyLoad from 'react-lazyload';
import {Slide, Fade, LightSpeed} from 'react-reveal';
import './projects-style.css';
import frontIMG from './proj-fronts/marqet.png';
import challenge from './marqet/challenge.svg';
import solution from './marqet/solution.png';
import research from './marqet/cryptopunks.png';
import persona from './marqet/persona.svg';
import ideation from './marqet/ideation.svg';
import midfi from './marqet/midfi.svg';
import hifi from './marqet/hifi.png';
import s1 from './marqet/s1.png';
import s2 from './marqet/s2.png';
import s3 from './marqet/s3.png';
import specs from './marqet/specs.png';
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
        <Slide bottom>
          <div>
              <h1 ref={this.myDivToFocus}>Marqet</h1>
              <h4 class="p-center">2021</h4>
              <h4 class="subtitle">Find art authenticated on a blockchain</h4>
          </div>
        </Slide>
        <Fade up>
          <div>
		  <img  class="img-l" loading="lazy" src={frontIMG}/>
          </div>
         </Fade>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div class="background-info border-top marqet">
              <div class="my-info center-content">
                  <div class="role-info">
                    <Slide bottom>
                          <div>
                              <h2>Topic</h2>
                              <p>Cryptocurrency</p>
                          </div>
                    </Slide>
                      <br/>
                    <Slide bottom>
                      <div>
                          <h2>Tools I Used</h2>
                          <p>Figma</p>
                      </div>
                    </Slide>
                  </div>
                  <br/>
                  <Slide bottom>
                  <div>
                      <div class="background-info">
                          <h4>For: Art Enthusiasts<br/>(Hypothetical)</h4>
                          <h4>Platform: Mobile</h4>
                          <h4>March 2021 (2 weeks)</h4>
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
                  <p class="center-content spacer">Marqet was inspired by art markets that are available online, but are somewhat complex to the average user since it deals with stuff such as crypto currencies, blockchain, hashes, and more. An easier to understand market place, meant for simply auctioning, browsing, buying/selling, and showcasing collections, would be different to the existing crypto markets that remain ‘cryptic’ (not showing identities, collections, limited socializing). <br/><br/>Although this is intentional to create a more anonymous ecosystem, it can be scary to newcomers. So, Marqet’s usefulness is in trying to appeal to newcomers interested in understand more of the crypto world and its practicalities.</p>
              </div>
              </Slide>
          </div>
          <div class="border-top spacer border-right" ref={this.div1}>
            <Slide bottom>
            <div>
                  <h3>Introduction</h3>
            </div>
            </Slide>
              <br/>
              <br/>
              <br/>
              <div>
                <Slide bottom>
                      <div>
                          <div class="problem-section spacer">
                            <Fade left>
                              <img class="img-s" class="problem" src={challenge}/>
                             </Fade>
                              <Slide bottom>
                                  <div>
                                      <h2 class="text-left center-content">The Challenge</h2>
                                      <p class="text-left center-content">How can we provide a mobile art market for any art enthusiast wondering what they can do with their crypto funds?</p>
                                  </div>
                              </Slide>
                          </div>
                      </div>
                </Slide>
              </div>
              <div class="border-left">
                  <Slide bottom>
                      <div>
                          <h2>The Solution</h2>
                          <div class="solution-sector spacer center-content">
                              <div class="solution-info">
                                  <div>
                                      <h4>Marqet is a crypto art market and auction mobile app for art ethusiasts figuring out more about crypto.</h4>
                                  </div>
                              </div>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <Fade right>
                              <img src={solution}/>
                              </Fade>
                          </div>
                      </div>
                    </Slide>
                </div>
          </div>
          <div class="border-top section spacer border-left" ref={this.div2}>
            <Slide bottom>
                  <div>
                    <div>
              			<h3>Research</h3>
                            <br/>
                          <p class="center-content">Doing some secondary research suggests that as crypto has grown massively in popularity, markets have emerged that try to sell things through crypto. Sometimes the things they sell are encrypted in a blockchain too as NFTs. Virtually any sort of file can be authenticated 'minted' to become an NFT.</p>
                          <br/>
                          <p class="center-content">Example of a NFT: <a target="_blank" href="https://gomint.me/query/?testnet&tokenId=0.0.453324">I made this NFT as an experiment</a></p>
                          <p class="center-content">Example of an NFT market: <a target="_blank" href="https://www.nbatopshot.com/">nbatopshot.com</a></p>
                          <br/>
                    </div>
              	  	<br/>
                    <div class="border-right">
                        <p class="center-content">Cryptopunks were amongst the first NFTs made. It was a generative art project made by 2 people called Larva Labs. You can read more about them <a href="https://www.larvalabs.com/cryptopunks">in this article.</a>  Some examples are shown in the screenshot below.</p>
                        <br/>
                        <br/>
                        <Fade left>
                        <img class="img-s" alt="art work titled cryptopunks, generative art and among the first NFTs minted" src={research} />
                        </Fade>
                    </div>
                  </div>
            </Slide>
            <div class="spacer"></div>
                <Slide bottom>
                <div>
                  <div class="spacer border-right">
                      <Slide bottom>
                      <div>
                        <h2>Persona</h2>
                        <p class="center-content">Here's a persona for this project, made through secondary research and a user interview with a small-time art collector.</p>
                      </div>
                      </Slide>
                      <br/>
                      <br/>
                      <div class="horizontal-section center-content border-padding subtle-shadow">
                          <img class="border-white center-content margin-right img-m" src={persona} />
                            <div>
                              <h3 class="text-left">Hailey</h3>
                              <h4 class="text-left">Age: 35</h4>
                              <h4 class="text-left bottom-border-white">Art enthusiast, Crypto newcomer</h4>
                              <h5 class="text-left">Hailey has cryptocurrency in the form of ethereum, but doesn’t really know what to do with it. <br/><br/>She’s interested in art,
          and how they can be purchased as NFT’s,
          but she’s new to the overall process.</h5>
                            </div>
                      </div>
                  </div>
                  </div>
                  </Slide>
                  <div class="border-right">
                      <Slide bottom>
                      <div>
                        <div class="needs-section spacer center-content">
                            <h2>The Needs</h2>
                            <br/>
                            <h4>What could our user need for a crypto-art market app?</h4>
                            <Slide bottom>
                            <div>
                                <div class="needs">
                                    <h1>1.</h1>
                                    <h4 class="h-left">Be able to place bids on crypto art.</h4>
                                </div>
                            </div>
                            </Slide>
                            <Slide bottom>
                            <div>
                                <div class="needs">
                                    <h1>2.</h1>
                                    <h4 class="h-left">View and adjust their <a target="_blank" href="https://en.wikipedia.org/wiki/Non-fungible_token">Non-Fungible Tokens</a> collection. These are digital items authenticated through blockchain technology that certifies a digital item is unique.</h4>
                                </div>
                            </div>
                            </Slide>
                            <Slide bottom>
                            <div>
                                <div class="needs spacer">
                                    <h1>3.</h1>
                                    <h4 class="h-left">A way to learn more information about a crypto art piece.</h4>
                                </div>
                            </div>
                            </Slide>
                        </div>
                       </div>
                       </Slide>
                     </div>
                     <div class="border-right">
                      <Slide bottom>
                      <div>
                          <div class="spacer">
                              <h2>Ideation</h2>
                              <br/>
                              <p class="center-content">I sketched possible ideas on how to implement a solution. Here is an example sketch of a task about viewing an art piece.</p>
                              <br/>
                              <br/>
                            <Fade right>
                                <img  src={ideation}/>
                            </Fade>
                          </div>
                     </div>
                     </Slide>
                     </div>
  		</div>
		<div class="section spacer">
        <br/>
            <Slide bottom>
            <div>
                <div class="spacer border-top">
        			<h3>Prototyping</h3>
                    <h2>Midfi</h2>
                    <p class="center-content">Using the research and sketches I had done, I made some midfi screens to better test out the ideas.</p>
                    <br/>
                    <br/>
                    <div class="border-right border-left">
                        <Fade left>
                            <img  src={midfi}/>
                        </Fade>
                    </div>
                </div>
            </div>
            </Slide>
            <Slide bottom>
            <div>
                <div class="spacer final-design-section">
                    <h2>Hifi</h2>
                    <p class="center-content">Next up, after getting peer-reviewed and taking notes of improvements, I designed a hi-fidelity prototype.</p>
                    <Fade right>
                        <img src={hifi}/>
                    </Fade>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p class="p-center">Here are the design and accessibility specifications I arranged for it.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="border-left">
                        <Fade left>
                        <div>
                            <img  class="img-m" src={specs}/>
                        </div>
                        </Fade>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            </Slide>
            <div class="spacer">
                <div class="spacer">
                    <Slide bottom>
                        <div>
                            <h2 class="center-content p-left">Artwork Info</h2>
                            <br/>
                            <h4 class=" center-content storyboard-h4">In this scenario, our user wants to find an artwork of interest,
    learn more about it, and decide
    to keep it on a watch list.</h4>
                        </div>
                    </Slide>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Fade right>
                    <div>
                        <img class="spacer img-l" src={s1} />
                    </div>
                    </Fade>
                </div>
                <div class="spacer">
                    <Slide bottom>
                        <div>
                            <h2 class="center-content p-left">Auctions</h2>
                            <br/>
                            <h4 class="center-content  storyboard-h4">Here, our user found an interesting piece of art
    and now wants to place a bid to buy it
    in auction.</h4>
                        </div>
                    </Slide>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Fade left>
                    <div>
                        <img  class="spacer img-l" src={s2}/>
                    </div>
                    </Fade>
                </div>
                <div>
                    <Slide bottom>
                        <div>
                            <h2 class="center-content  p-left">Adjust Privacy</h2>
                            <br/>
                            <h4 class="center-content  storyboard-h4">Now our user wants to adjust the privacy
    settings for an art piece in her collection.
    She wants it to be hidden from the public.</h4>
                        </div>
                    </Slide>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Fade right>
                    <div>
                        <img  class="img-l" src={s3}/>
                    </div>
                    </Fade>
                </div>
            </div>
            <Slide bottom>
            <div>
                <div class="border-bottom border-top spacer">
                    <h2 class="p-center">Check it out</h2>
                    <h4 class="p-center"><a target="_blank" href="https://www.figma.com/file/BnnGCuUM0paM6AlwuYkLVF/Marqet?node-id=0%3A1">View figma</a></h4>
                </div>
            </div>
            </Slide>
            <br/>
            <Slide bottom>
            <div>
                <div class="spacer">
                    <h2>Reflection</h2>
                    <p class="center-content">This was a fun project for learning more about NFTs, and blockchains.</p>
                    <br/>
                    <p class="center-content">In terms of enivormental impact, it was interesting to learn about Proof of Work vs Proof of Stake in crypto transactions. Proof of stake has promise in terms of being more energy efficient, and is seeing widespread usage.</p>
                    <br/>
                    <p class="center-content">Although cryptocurrencies generally pose a terrible risk in terms of the environmental cost that comes with them, proof of stake mining could help overcome that.</p>
                    <br/>
                    <p class="center-content">However, time will tell how the larger art world will react to NFTs as they become more and more popular.</p>
                    <br/>
                    <p class="center-content">As such, for the future, it would be good to focus on adding more socially-conscious aspects such as the carbon footprint of a crypto artwork.</p>
                </div>
            </div>
            </Slide>
            <h2><a onClick={this.handleOnClick}>Return to top</a></h2>
        </div>
        </div>

    );
  }
}

export default Marqet;
