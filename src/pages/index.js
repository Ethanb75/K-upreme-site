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

// init email js


const Contact = () => (
  <section className="feet">
    <h2 className="contactTitle"><div>Contact</div></h2>
    <div className="contactWrap">
      <form onSubmit={ev => {
        ev.preventDefault();
        emailjs.init("user_dCiSdqLDrAURIDmEOaMQH");

        let name = ev.target.children[0].children[0].children[1].value;
        let email = ev.target.children[0].children[1].children[1].value;
        let message = ev.target.children[2].value;
        let button = document.getElementById('sendMessage');


        if (name.length > 1) {
          if (ev.target.children[0].children[1].children[1].checkValidity) {
            if (message.length > 2) {
              button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i><span class="sr-only">Loading...</span>';
              ev.target.children[0].children[0].children[1].value = '';
              ev.target.children[0].children[1].children[1].value = '';
              ev.target.children[2].value = '';

              emailjs.send("default_service", "ksupreme", { name, email, message })
                .then(function (response) {
                  button.innerHTML = 'Message Sent';
                  button.setAttribute('disabled', 'true');
                  button.style = "cursor: default; color: rgba(255,255,255,.4)"
                }, function (err) {
                  console.log("FAILED. error=", err);
                });
            } else {
              alert('please enter a message');
            }
          } else {
            alert('please enter a valid email');
          }
        } else {
          alert('please enter a valid name');
        }
      }}>
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
          <button id="sendMessage">Send Message</button><button>Clear</button>
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
          <h2><a href="https://www.instagram.com/ksupremenaz/">@ksupremenaz</a><span> 84K followers</span></h2>
          {/* <div id="instafeed" className="grid"></div> */}
          <div style={{ padding: '10rem 0rem', fontSize: '2.5em', textAlign: 'center', color: 'whitesmoke' }}>Coming Soon</div>
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
      <video src="https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/assets%2Fvid.mp4?alt=media&token=6fe2bf80-e04b-4050-bc95-33ae9c5f8066" preload="metadata" onCanPlay={ev => ev.target.volume = "0"} controls autoPlay="true" poster="https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/assets%2FvidCover.png?alt=media&token=2c5e20d6-9430-4542-a7c1-f475e6c9bf0b"></video>
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


class IndexPage extends Component {
  componentDidMount() {
    // window.addEventListener('load', () => {
    // window.dataLayer = window.dataLayer || [];
    // function gtag() { dataLayer.push(arguments); }
    // gtag('js', new Date());

    // gtag('config', 'UA-113803954-1');
    // })
  }
  render() {
    return (
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
  }
}

const Maintenance = () => (
  <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ textAlign: 'center', fontSize: '2em' }}>Sorry, currently undergoing maintenance</span>
  </div>
)

export default Maintenance;