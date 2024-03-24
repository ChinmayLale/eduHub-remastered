import React from 'react';
import {Link} from 'react-router-dom';
import '../navbtn.css';
function NavBar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="80%" viewBox="0 0 2048 2048">
                    <path fill="currentColor" d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z" />
                </svg>
                <h3><span>Edu</span>Hub</h3>
            </div>
            <div className="nav-menu">
                <h4><Link to="/"  className='Link'>Home</Link></h4>
                <h4><Link to="/home" className='Link'>About</Link></h4>
                <h4><Link to="/home" className='Link'>Courses</Link></h4>
                <h4><Link to="/home" className='Link'>Contact Us</Link></h4>
            </div>

            <div className="nav-search">
                <i className="ri-search-2-line"></i>
                <h4>Explore</h4>
                <i className="ri-shopping-cart-2-line"></i>
                <button className="button">
                    Try Now
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                        <path
                            clipRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NavBar