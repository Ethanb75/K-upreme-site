import React, { Component } from "react";
import Link from 'gatsby-link';
import Instafeed from 'instafeed.js';



import './App.css';
import '../css/Breakpoints.css';

import './fonts/font-awesome/css/font-awesome.min.css';

import Music from '../partials/Music';



const feed = new Instafeed({
  get: 'user',
  userId: '304471643',
  // userId: '1530157927',
  clientId: '4dfa053dff9b46f884f135b1e7f991b1',
  accessToken: '304471643.4dfa053.e0751648762b4ed187e9e432b9befcdd',
  resolution: 'standard_resolution',
  limit: 6,
  template: `
    <a href="{{link}}" style="background-image: url({{image}})" class="box" target="__blank">
      <span>
        {{caption}}
        <div>
          <i class="fa fa-heart-o" aria-hidden="true"></i> {{likes}}
        </div>
      </span>
    </a>`
});




const Contact = () => (
  <section className="feet">
    <h2 className="contactTitle"><div>Contact</div></h2>
    <div className="contactWrap">
      <form>
        <div>
          <span>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input name="name" type="email" />
          </span>
        </div>
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
        <div className="buttons">
          <button>Send Message</button><button>Clear</button>
        </div>
      </form>
      <div className="otherContact">
        <div><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:ksuprememusic@gmail.com">ksuprememusic@gmail.com</a></div>
        <div><i className="fa fa-snapchat-ghost" aria-hidden="true"></i> ksupreme1</div>
        <div><i className="fa fa-cloud" aria-hidden="true"></i> 1ksupreme</div>
      </div>
    </div>
    <footer>
      <div>
        <span onClick={() => document.getElementsByTagName('header')[0].scrollIntoView({ behavior: 'smooth' })}>Top</span>
        <span onClick={() => document.getElementsByTagName('video')[0].scrollIntoView({ behavior: 'smooth' })}>Recent</span>
        <span onClick={() => document.getElementsByClassName('moreMusic')[0].scrollIntoView({ behavior: 'smooth' })}>Music</span>
      </div>
    </footer>
  </section>
)

class Feed extends Component {
  componentDidMount() {
    return feed.run();
  }
  render() {
    return (
      <section className="feed">
        <div>
          <h2>@ksupremenaz <span>84K followers</span></h2>
          <div id="instafeed" className="grid"></div>
          <a href="https://www.instagram.com/ksupremenaz/" target="__blank">More</a>
        </div>
      </section>
    )
  }
}




const RecentMusic = () => (
  <section className="recentMusic">
    <div>
      <span>
        <span>Recent</span>
      </span>
      <video src="https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/assets%2Fvid.mp4?alt=media&token=6fe2bf80-e04b-4050-bc95-33ae9c5f8066" preload="metadata" onCanPlay={ev => ev.target.volume = "0"} controls autoPlay="true"></video>
      <div className="videoAbout">
        <div>
          <h4>Stuck</h4>
          <p style={{ marginLeft: '.3rem' }}>
            K$upreme
          </p>
        </div>
      </div>
    </div>
  </section>
)


const IndexPage = () => (
  <div>
    <header>
      <div className="left">
        <h1>K</h1>
      </div>
      <div className="right">
        <span>
          <a href="">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-facebook" style={{ margin: '1rem 0rem' }} aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </span>
        <h1>$upreme</h1>
        <h4>NAZ</h4>
      </div>
    </header>
    <RecentMusic />
    <Music />
    <div className="feedIntro">
      <span>FEED</span>
      <div></div>
    </div>
    <Feed />
    <Contact />
  </div>
)

export default IndexPage
