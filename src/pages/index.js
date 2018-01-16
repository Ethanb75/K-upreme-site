import React, { Component } from "react";
import Link from 'gatsby-link';
import Instafeed from 'instafeed.js';



import './App.css';
import '../css/Breakpoints.css';
import angle from './angle.svg';
import vid from '../assets/vid.mp4';
import song1 from '../assets/song1.png';
import './fonts/font-awesome/css/font-awesome.min.css';

import Player from '../partials/Player';



const feed = new Instafeed({
  get: 'user',
  userId: '304471643',
  clientId: '4dfa053dff9b46f884f135b1e7f991b1',
  accessToken: '304471643.4dfa053.e0751648762b4ed187e9e432b9befcdd',
  resolution: 'standard_resolution',
  // template: '<a href="{{link}}"><img src="{{image}}" /></a>'
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

const music = [
  {
    albumName: 'Sorry 4 The Flex',
    cover: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/assets%2F00%20-%20kupreme_Sorry_4_The_Flex-front-large.jpg?alt=media&token=dcb51124-bf3c-41c6-802e-b4e368177f8f',
    songs: [
      { name: 'Chair', ft: 'Slime Sito', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F01%20-%20Chair%20ft%20Slime%20Sito%20(prod%20Brent%20Rambo%20%26%20Akachi%20Beats).mp3?alt=media&token=10336b48-2ef1-4c05-a6c8-fd9899ac45cd' },
      { name: 'Drip', ft: 'Lil Dude', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F02%20-%20Drip%20ft%20Lil%20Dude%20(prodStoopidXool%20%26%20Akachi%20Beats).mp3?alt=media&token=4e3805ce-48ca-43fb-b6b9-f65055640e22' },
      { name: 'Started Off Finessen', ft: '', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F03%20-%20Started%20Off%20Finessen%20(ProdOscar100).mp3?alt=media&token=4745046d-7d58-4794-aefa-12020ca71e2a' },
      { name: 'Tony', ft: 'Lil Yachty', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F04%20-%20Tony%20ft%20Lil%20Yachty%20(Prod%20Digital%20Nas).mp3?alt=media&token=9a86c228-0242-4f81-8403-c89647f966a3' },
      { name: 'Money I Love It', ft: '', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F05%20-%20Money%20I%20Love%20It%20(ProdKupreme).mp3?alt=media&token=20ce9798-56bb-485d-a55b-b8b92f28a56a' },
      { name: 'Home Depot', ft: 'Drugrixh Scarfo Da Plug & Lil Dude', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F06%20-%20Home%20Depot%20ft%20Drugrixh%20Scarfo%20Da%20Plug%20%26%20Lil%20Dude.mp3?alt=media&token=8109c0ae-6b6c-49fd-b05a-360ff51866f9' },
      { name: 'Trap Nigga Fly Nigga', ft: 'Drugrixh Peso', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F07%20-%20Trap%20Nigga%20Fly%20Nigga%20ft%20DrugRixh%20Peso%20(Prod%20Bangs).mp3?alt=media&token=1d058516-ecf8-4673-8312-f24697e53ade' },
      { name: 'Luigi', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F08%20-%20Luigi%20(Prod%20El%20Marlo%20Jr).mp3?alt=media&token=b47a12d9-f7bf-4762-b88f-09678032922e' },
      { name: 'Love On Me', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/Sorry4TheFlex%2F09%20-%20Love%20On%20Me%20(Prod%20Bangs).mp3?alt=media&token=d4e03088-3ec7-4019-9983-e1e1bea7b390' },
    ]
  },
  {
    albumName: 'Flex Muzik',
    cover: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/assets%2F00%20-%20KSupreme_Flex_Muzik-front-large.jpg?alt=media&token=b842b691-351d-4b4e-86ff-098d24c92f1f',
    songs: [
      { name: 'Bout That Money', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2FFM1-bout_that_money.mp3?alt=media&token=09e3ad04-fba8-4476-8cc4-f41bbc2bc0f4' },
      { name: 'Fell in Love Wit The Money', ft: 'Lil Yachty', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F02%20-%20Fell%20In%20Love%20Wit%20The%20Money%20(Ft%20Lil%20Yachty).mp3?alt=media&token=c9a87a6e-65c7-416a-a356-a44fbcb7913f' },
      { name: 'So High', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F03%20-%20So%20High.mp3?alt=media&token=49cbc559-6813-48c2-abdd-e7711e7ca914' },
      { name: 'Uzi', ft: 'Chief Keef', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F04%20-%20Uzi%20(Ft%20Chief%20Keef).mp3?alt=media&token=cae352ee-5d8e-4795-8fc4-0970abe5b68d' },
      { name: 'Frienemies', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F05%20-%20Frienemies.mp3?alt=media&token=b06919c1-00a2-4235-b01b-0799afe113c3' },
      { name: 'Gang', ft: 'Rich the Kid', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F06%20-%20Gang%20(Ft%20Rich%20The%20Kid).mp3?alt=media&token=29f175f7-86f4-43f3-8d7d-0e317f0633d0' },
      { name: 'Ridin Around', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F07%20-%20Ridin%20Around.mp3?alt=media&token=0ae43c3b-21fb-4723-b0a4-d5df0c1d3697' },
      { name: 'Stuck', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F08%20-%20STuck.mp3?alt=media&token=d23edfb4-cb2e-4f17-bb5d-c51256c40ed8' },
      { name: 'Feeling Okay', ft: 'Kodie Shane', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F09%20-%20Feeling%20Okay%20(Ft%20Kodie%20Shane).mp3?alt=media&token=9fffe998-3d68-4b88-a88f-0c5c27f5240b' },
      { name: 'That Guy', ft: 'Duwap Kaine', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F10%20-%20That%20Guy%20(Ft%20Duwap%20Kaine).mp3?alt=media&token=f474c5e4-e87a-4de8-bb0f-70ee6d19c9ac' },
      { name: 'Swag', url: 'https://firebasestorage.googleapis.com/v0/b/ksupreme-ab898.appspot.com/o/FlexMuzik%2F11%20-%20Swag.mp3?alt=media&token=4de426b9-3d1b-43b4-91d4-4963493525c9' }
    ]
  }
]


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
        <span>Top</span>
        <span>Recent</span>
        <span>Music</span>
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
        </div>
      </section>
    )
  }
}

class MoreMusic extends Component {
  state = {
    currentAlbum: 1,
    currentSong: 0
  }
  renderSongList(album) {
    return album.songs.map((el, i) => {
      return (
        <li key={i} onClick={
          ev => {
            this.setState({ currentSong: i });
          }
        } className={this.state.currentSong === i ? 'currentSong' : ''}>
          <span>{el.name}</span>{el.ft ? 'ft. ' + el.ft : ''}
        </li>
      )
    });
  }
  close
  render() {
    const album = music[this.state.currentAlbum];
    const song = album.songs[this.state.currentSong];
    return (
      <section className="moreMusic">
        <div>
          <div>
            <img src={album.cover} />
            <div style={{ marginLeft: '10rem' }}>
              <i className="fa fa-cloud" aria-hidden="true"></i><i style={{ marginLeft: '.5rem' }} className="fa fa-download" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div>
          <span className="musicSub">
            <span>Music</span>
          </span>
          <div className="currentAlbum">
            <img src={album.cover} />
            <div>
              <h3>{album.albumName}</h3>
              <button onClick={
                () => {
                  this.setState({ currentAlbum: this.state.currentAlbum === 1 ? 0 : this.state.currentAlbum + 1, currentSong: 0 })
                }
              }>
                Next Album <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div>
            <ul>
              {this.renderSongList(album)}
            </ul>
          </div>
          <div className="playing">
            <h5>
              {song.name} <span>{song.ft ? 'ft. ' + song.ft : ''}</span>
            </h5>
          </div>
          <Player url={song.url} />
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
      <video src={vid} controls></video>
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
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-facebook" style={{ margin: '1rem 0rem' }} aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </span>
        <h1>$upreme</h1>
        <h4>NAZ</h4>
      </div>
    </header>
    <RecentMusic />
    <MoreMusic />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span style={{ width: '62vw', letterSpacing: '.5rem', margin: '2.5rem 0rem' }}>FEED</span>
    </div>
    <Feed />
    <Contact />
  </div>
)

export default IndexPage
