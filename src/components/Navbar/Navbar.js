import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [exploreDropdown, setExploreDropdown] = useState(false);
  const [hireFreelancersDropdown, setHireFreelancersDropdown] = useState(false);

  const toggleExploreDropdown = () => {
    setExploreDropdown(!exploreDropdown);
  };

  const toggleHireFreelancersDropdown = () => {
    setHireFreelancersDropdown(!hireFreelancersDropdown);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
      
        <a href="#" className="navbar-logo">
          Behance
        </a>
        <ul className="nav-menu " >
        <div className='left'>
          <li className="nav-item dropdown">
            <a href="#" className="nav-links" onClick={toggleExploreDropdown}>
              Explore

              {exploreDropdown && <i className="fas fa-caret-down"></i>}
            </a>
            {exploreDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Search & Explore
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Curated Galleries
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Best of Behance
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Graphic Design
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Illustration
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Photography
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    UI/UX
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    3D Art
                  </a>
                </li>
              </ul>
            )}
          </li>
          
          <li className="nav-item">
            <a href="#" className="nav-links">
              Assets
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Behance PRO
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-links"
              onClick={toggleHireFreelancersDropdown}
            >
              Hire Freelancers 

              {hireFreelancersDropdown && <i className="fas fa-caret-down"></i>}
            </a>
            {hireFreelancersDropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Find Creatives
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                   My Freelance Projects
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Graphic Designers
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Brand Designers
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    UI/UX Designers
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Illustrators
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link">
                    Logo Designers
                  </a>
                </li>
               
              </ul>
            )}
          </li>
          </div>
         <div className='right'>
          <li className="nav-item">
            <button  className="btn1">
              Log In
            </button>
          </li>
          <li className="nav-item">
            <button  className="btn2">
              Sign Up
            </button>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
