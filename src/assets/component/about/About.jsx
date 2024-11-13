import React from 'react'
import './about.css'
const About = () => {
  return (
    <div id='about'>
        <div id="abt">
          <h6>About The Company</h6>
          <p>What You Should Know About <span>Vote</span>City</p>
        </div>
        <div id="misvis">
          <div id="mission">
            <h3>Our <span>Mission</span></h3>
            <p>To empower citizens to engage actively in their communities by providing a platform for informed decision-making, easy event participation and...<span className='read'>Read More</span></p>
          </div>
          <div id="vision">
            <h3>Our Vision</h3>
            <p>To empower citizens to engage actively in their communities by providing a platform for informed decision-making, easy event participation and...<span className='read'>Read More</span></p>
          </div>
        </div>
    </div>
  )
}

export default About