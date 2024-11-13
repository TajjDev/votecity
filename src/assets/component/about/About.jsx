import React from 'react'
import './about.css'
import VisMis from './VisMis'
const About = () => {
  return (
    <div id='about'>
        <div id="abt">
          <h6>About The Company</h6>
          <p>What You Should Know About <span>Vote</span>City</p>
        </div>
        <div id="misvis">
            <VisMis id={"mission"} textH3={"Mission"} p={"To empower citizens to engage actively in their communities by providing a platform for informed decision-making,     easy event participation and..."} read={"Read More"}/>
            <VisMis id={"vision"} textH3={"Vision"} p={"To empower citizens to engage actively in their communities by providing a platform for informed decision-making, easy    event participation and..."} read={"Read More"}/>
        </div>
    </div>
  )
}

export default About