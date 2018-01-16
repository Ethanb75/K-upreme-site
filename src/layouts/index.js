import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import '../css/Nav.css'

const buttonStyle = {
  width: '100%',
  height: '.25rem',
  backgroundColor: 'rgb(25,25,25)',
  position: 'absolute',
  transformOrigin: '0% 0%',
  transition: 'all .3s ease-out'
}

class Nav extends Component {
  state = {
    navShowing: false
  }
  componentDidMount() {
    let scrolling = document.getElementsByTagName('video')[0].getBoundingClientRect();
    let navClassList = document.getElementsByTagName('nav')[0].classList;
    let throttle;


    document.addEventListener('scroll', function (ev) {
      if (throttle) return;
      // code below
      if (scrollY >= scrolling.top) {
        navClassList.add('navDown');
        navClassList.remove('navUp');
      } else {
        navClassList.remove('navDown');
        navClassList.add('navUp');
      }
      // rest of throttle
      throttle = setTimeout(function () {
        throttle = undefined;
      }, 300);
    });
  }
  render() {
    const { navShowing } = this.state;
    return (
      <nav style={navShowing ? { zIndex: '1000' } : {}}>
        <div className="navMenu" style={navShowing ? { opacity: '1', transform: 'translateX(0%)' } : { opacity: '0', transform: 'translateX(100%)' }}>
          <div><a href="">HOME</a></div>
          <div><a href="">MERCH</a></div>
          <div><a href="">LISTEN</a></div>
          <div><a href="">CONTACT</a></div>
        </div>
        <div>
          <h1 style={{ margin: 0, padding: '1rem' }} className="logo">
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              LOGO
            </Link>
          </h1>
          <span style={{
            display: 'inline',
            position: 'absolute',
            right: '1rem',
            top: '1.25rem',
            width: '2.3rem',
            height: '1.2rem',
            cursor: 'pointer'
          }} onClick={
            () => {
              this.setState({ navShowing: !navShowing });

              if (document.getElementsByTagName('html')[0].style.overflow)
                document.getElementsByTagName('html')[0].style.overflow = '';
              else
                document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            }
          }>
            <span style={navShowing ? { ...buttonStyle, transform: 'translate(-3px, 1.45rem) rotate(-45deg)', backgroundColor: 'white' } : buttonStyle}></span>
            <span style={navShowing ? { ...buttonStyle, opacity: '0' } : { ...buttonStyle, top: '.6rem' }}></span>
            <span style={navShowing ? { ...buttonStyle, top: '1.2rem', transform: 'translate(2px, -1.4rem) rotate(45deg)', backgroundColor: 'white' } : { ...buttonStyle, top: '1.2rem' }}></span>
          </span>
        </div>
      </nav>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="K$UPREME NAZ"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
