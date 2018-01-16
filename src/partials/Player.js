import React, { Component } from "react";
import ReactPlayer from 'react-player';

// soon: play whatever song is passed
// import dbm2 from '../assets/die-by-myself-2.mp3';
import Duration from '../js/Duration';


export default class Player extends Component {
  state = {
    url: this.props.url,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  playPause = (ev) => {
    this.setState({ playing: !this.state.playing });
    console.log(ev.target.parentElement.parentElement);

    // let playing = document.querySelector('.playing');
    // let controls = document.querySelector('.musicPlayer')
    // playing.classList.add('stickSongTitle');
    // controls.classList.add('stickControls')
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  ref = player => {
    this.player = player
  }
  render() {
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;
    return (
      <div className="musicPlayer">
        <ReactPlayer
          url={this.props.url}
          ref={this.ref}
          className='react-player'
          width='100%'
          height='100%'
          playing={playing}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <div className="player_controls">
          <button onClick={ev => this.playPause(ev)}>
            {playing ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>}
          </button>
          <span style={{ marginRight: '.5rem' }}>
            <Duration seconds={duration * played} /> /
            <Duration seconds={duration} />
          </span>
          <input
            type='range' min={0} max={1} step='any'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
          <span>
            <i className="fa fa-volume-up" aria-hidden="true"></i>
            <input
              type='range'
              min={0} max={1}
              step='any'
              value={volume}
              onChange={this.setVolume}
            />
          </span>
        </div>
      </div>
    )
  }
}