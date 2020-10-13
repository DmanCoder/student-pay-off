import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { bannerAnimation } from './animations/landingPageAnimations';

// STYLES
import './css/style.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // HEADER
  let header = useRef(null);

  // BANNER
  let banner = useRef(null);
  let bannerBgAddition = useRef(null);

  // BANNER CONTENT
  let h1LineArr = useRef([]);
  let contentP = useRef(null);
  let contentButton = useRef(null);
  let playVideo = useRef(null);
  let playVideoCover = useRef(null);

  // IMAGE
  let handImg = useRef(null);
  let featureBanner = useRef(null);
  let featureBannerGreen = useRef(null);

  useEffect(() => {
    // RUN BANNER ANIMATIONS
    bannerAnimation({
      header,
      banner,
      bannerBgAddition,
      contentP,
      contentButton,
      playVideo,
      playVideoCover,
      handImg,
      featureBanner,
      featureBannerGreen,
      h1LineArr,
    });
  }, []);

  return (
    <div className="App">
      <header ref={(el) => (header = el)} id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="header-inner">
              <div className="logo">M.</div>
              <div className="navigation">
                <nav>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Zero Interest</a>
                    </li>
                    <li>
                      <a href="/">Case Studies</a>
                    </li>
                    <li>
                      <a href="/">Resources</a>
                    </li>
                    <li>
                      <a href="/">Students</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="nav-logins">
                <div className="login">
                  <a href="/">Log in</a>
                </div>
                <div className="apply">
                  <a href="/">Apply Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner" id="banner">
        <div
          ref={(el) => (bannerBgAddition = el)}
          id="bannerBgAddition"
          className="banner-addition-bg"
        ></div>
        <div
          ref={(el) => (banner = el)}
          id="bannerBg"
          className="banner-bg"
        ></div>
        <div className="container">
          <div className="row">
            <div className="banner-inner" id="bannerInner">
              <div className="content">
                <div className="content-inner">
                  <h1>
                    <div className="line">
                      <span ref={(el) => h1LineArr.current.push(el)}>
                        Helping student pay
                      </span>
                    </div>
                    <div className="line">
                      <span ref={(el) => h1LineArr.current.push(el)}>
                        off their ridiculous debts
                      </span>
                    </div>
                  </h1>
                  <p ref={(el) => (contentP = el)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt doloremque repellendus pariatur ad. Necessitatibus
                    beatae, alias assumenda.
                  </p>
                  <div ref={(el) => (contentButton = el)} className="btn-row">
                    <a href="/">Apply Today</a>
                  </div>
                  <div className="play-video">
                    <div
                      ref={(el) => (playVideoCover = el)}
                      className="play-video cover"
                    ></div>
                    <span ref={(el) => (playVideo = el)}>
                      <img src={require('./images/play.svg')} alt="play icon" />
                      Watch Video
                    </span>
                  </div>
                </div>
              </div>
              <div className="image">
                <div className="image-inner">
                  <img
                    ref={(el) => (handImg = el)}
                    src={require('./images/hand.webp')}
                    alt="Hand"
                  />
                  <div
                    ref={(el) => (featureBanner = el)}
                    className="feature-banner"
                    id="featureBanner"
                  >
                    0% Interest
                  </div>
                  <div
                    ref={(el) => (featureBannerGreen = el)}
                    className="feature-banner green"
                    id="featureBannerGreen"
                  >
                    No Credit Checks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="features-inner">
              <div className="features-content">
                <h3>We are here to provide you with the best services.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus cupiditate magni vitae aliquam dolorem nobis facere
                  quod aut autem fuga ex, neque error unde possimus odit eaque
                  voluptatibus sapiente qui.
                </p>
                <div className="btn-row">
                  <a href="/">
                    View All Services
                    <img
                      src={require('./images/arrow-right.svg')}
                      alt="arrow right"
                    />
                  </a>
                </div>
              </div>
              <div className="features-list">
                <ul>
                  <li>
                    <img
                      src={require('./images/fast-delivery.svg')}
                      alt="fast delivery"
                    />
                    <h5>Fast Delivery</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                  <li>
                    <img
                      src={require('./images/0-fees.svg')}
                      alt="fast delivery"
                    />
                    <h5>$0 Fee's</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                  <li>
                    <img
                      src={require('./images/0-interest.svg')}
                      alt="fast delivery"
                    />
                    <h5>0% Interest</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                  <li>
                    <img
                      src={require('./images/no-credit-check.svg')}
                      alt="fast delivery"
                    />
                    <h5>No Credit Checks</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                  <li>
                    <img
                      src={require('./images/chat-support.svg')}
                      alt="fast delivery"
                    />
                    <h5>Chat Support</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                  <li>
                    <img
                      src={require('./images/fixed-payment-option.svg')}
                      alt="fast delivery"
                    />
                    <h5>Fixed Payment Option</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui dolorum rerum vero.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
