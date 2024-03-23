import React from 'react'
import bgimg from './assets/hero-bg.svg';
import herobgimg from './assets/hero-shape-2.png';
import heropic from './assets/heroimg2.png';
import book from './assets/ml.svg';
import DataS from './assets/Data_s.svg';
import herobg3 from './assets/hero3-bg.png';
function Hero() {
  return (
    <div className='home'>
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
          <img src={herobgimg} className='herobgimg' alt="" />
          <img className='heroimg' src={heropic} alt="" />
        </div>
      </div>
      <div className='hero2'>
        <h2>categories</h2>
        <h1>Discover <span>10+ Categories</span> of Online Classes</h1>
        <h2>Unlock limitless knowledge !</h2>
        <div className="features">
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Machine Learning</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>2+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={DataS} alt="" />
            <h3>Data Science</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>6+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Web Development</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>8+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Android Development</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>5+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Data Structures</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>10+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Full Stack Developer</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>12+ Courses</h5>
          </div>
          <div className="feature-card">
            <img src={book} alt="" />
            <h3>Version Control System</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>10+ Courses</h5>
          </div>
        </div>
        <button className='morecourse'>Discover More</button>
      </div>
      <div className="hero3">
        <div className="left">
          <img src={herobg3} className='bgimg' alt="" />
        </div>
        <div className="right">
          <h4>About Us</h4>
          <h1>Over 10 Years in <span>Distant learning</span> for Skill Development</h1>
          <h3>See what sets us apart !</h3>
          <div className="tagline">
            <i class="ri-check-double-line"></i>
            <h3>"Attentivize" - Real-time student engagement monitoring.</h3>
          </div>
          <div className="tagline">
            <i class="ri-check-double-line"></i>
            <h3>"SecureExamGuard"- Prevents cheating & maintaining a fair assessment process.</h3>
          </div>
          <div className="tagline">
            <i class="ri-check-double-line"></i>
            <h3>"FlexLearn" - Explore diverse course offerings at your own pace.</h3>
          </div>
          <div className="tagline">
            <i class="ri-check-double-line"></i>
            <h3>"DirectConnect" - One-on-one live sessions with expert instructors.</h3>
          </div>
          <div className="tagline">
            <i class="ri-check-double-line"></i>
            <h3>"EmergencyAccess"- Get access to recorded lectures in emergencies with instructor permission for uninterrupted learning.</h3>
          </div>
        </div>
      </div>
      <dev className="hero4">
        <h3>POPULAR COURSES</h3>
        <h1>Pick A Course To Get Started</h1>
      </dev>
    </div>
  )
}

export default Hero;