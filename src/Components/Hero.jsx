import React from 'react'
import bgimg from './assets/hero-bg.svg';
import herobgimg from './assets/hero-shape-2.png';
// import herobgimg from './assets/pngtree.png';
// import herobgimg from './assets/hero-bg-2.png';
// import heropic from './assets/animations/bgpic1.jpg';
import heropic from './assets/heroimg2.png';
function Hero() {
  return (
    <div className="hero">
      <img src={bgimg} alt="" />
      <div className="left">
        <h1>
          Go beyond the limitations of<br /><span>e-Learning</span>
        </h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugiat necessitatibus dolores modi suscipit asperiores omnis aspernatur soluta excepturi mollitia.
        </h3>
        <button className='button2'>
          Explore Courses
          <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className="right">
        <img src={herobgimg} className='herobgimg'alt="" />
        <img  className='heroimg'src={heropic} alt="" />
      </div>
    </div>
  )
}

export default Hero;