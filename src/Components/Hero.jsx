import React, { useEffect, useState } from 'react';
import bgimg from './assets/hero-bg.svg';
import herobgimg from './assets/hero-shape-2.png';
import heropic from './assets/heroimg2.png';
import book from './assets/ml.svg';
import DataS from './assets/Data_s.svg';
import herobg3 from './assets/hero3-bg.png';






function Hero() {
  const [courses, setCourses] = useState(null);
  const [showCourse, setShowCourse] = useState(3);
  useEffect(() => {
    fetch("http://localhost:8000/get").then(
      (res) => res.json()
    ).then((data) => {
      console.log(data.users);
      console.log(typeof (data.users));
      setCourses(data.users)
      console.log("SetCourses = " + courses);
    })
  }, [])

  const moreCourse = () => {
    setShowCourse(showCourse + 3);
  }

  const star = 5;





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
            <i className="ri-arrow-right-up-line"></i>
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
        <div className="features" >
          {courses && courses.slice(0, showCourse).map((course) => (
            // console.log("CourseName : "+course.course);
            <div className="feature-card" key={course.id}>
              <img src={book} alt="" />
              <h3 style={{ textTransform: 'capitalize' }}>{course.course}</h3>
              <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
              <h5>2+ Courses</h5>
            </div>


          )
          )}
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
            <h3>Version Control System</h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, aliquid.</h4>
            <h5>10+ Courses</h5>
          </div>
        </div>
        <button className='morecourse' onClick={moreCourse}>Discover More</button>
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
            <i className="ri-check-double-line"></i>
            <h3>"Attentivize" - Real-time student engagement monitoring.</h3>
          </div>
          <div className="tagline">
            <i className="ri-check-double-line"></i>
            <h3>"SecureExamGuard"- Prevents cheating & maintaining a fair assessment process.</h3>
          </div>
          <div className="tagline">
            <i className="ri-check-double-line"></i>
            <h3>"FlexLearn" - Explore diverse course offerings at your own pace.</h3>
          </div>
          <div className="tagline">
            <i className="ri-check-double-line"></i>
            <h3>"DirectConnect" - One-on-one live sessions with expert instructors.</h3>
          </div>
          <div className="tagline">
            <i className="ri-check-double-line"></i>
            <h3>"EmergencyAccess"- Get access to recorded lectures in emergencies with instructor permission for uninterrupted learning.</h3>
          </div>
        </div>
      </div>
      <div className="hero4">
        <h3>POPULAR COURSES</h3>
        <h1>Pick A Course To Get Started</h1>
        <div className="course-card-div">
          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='course-info'>
              <h3>beginner</h3>
              <div className='stars'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-line"></i>
              <i class="ri-star-line"></i>
              <h3>(3.5 / 100) ratings</h3>
              </div>
              <h1>Build Responsive Real- World Websites with HTML and CSS</h1>
              <h1><span>Rs 1,000</span></h1>
            </div>
          </div>

          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='course-info'>
              <h3>beginner</h3>
              <div className='stars'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-line"></i>
              <i class="ri-star-line"></i>
              <h3>(3.5 / 100) ratings</h3>
              </div>
              <h1>Build Responsive Real- World Websites with HTML and CSS</h1>
              <h1><span>Rs 1,000</span></h1>
            </div>
          </div>

          <div className="course-card">
            <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='course-info'>
              <h3>beginner</h3>
              <div className='stars'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-line"></i>
              <i class="ri-star-line"></i>
              <h3>(3.5 / 100) ratings</h3>
              </div>
              <h1>Build Responsive Real- World Websites with HTML and CSS</h1>
              <h1><span>Rs 1,000</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;