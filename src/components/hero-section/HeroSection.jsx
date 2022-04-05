import React from 'react'
import './hero-section.css'
import heroImg from '../../images/hero-img.png'
import statsImg from '../../images/stats.png'


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero_left">
        <div className="hero_text">
          <h4>Product Growth Solution in Single Platform</h4>
          <h1>
            Managing business <br />
            payments has never <br />
            been easier
          </h1>
          <p>
            Never at water me might. On formed merits hunted unable merely by mr
            whence or. Possession the unpleasing simplicity her uncommonly.
          </p>
          <a href=" ">Try for free</a>
        </div>
        <div className="hero_stats">
          <div className="stats">
            <h2>195k+Users</h2>
            <p>
              Delightful remarkably mr on announcing themselves entreaties
              favourable.
            </p>
          </div>
          <div className="stats">
            <h2>$400m+ Saved</h2>
            <p>
              About to in so terms voice at. Equal an would is found seems of
              and concluded.
            </p>
          </div>
        </div>
      </div>
      <div className="hero_right">
          <div className="bg-gradient"></div>
          <div class="hero-images">
          <img src={heroImg} alt="" className='main-img' />
          <img src={statsImg} alt="" className='balances-img' />
          </div>
      </div>
    </section>
  );
}

export default HeroSection