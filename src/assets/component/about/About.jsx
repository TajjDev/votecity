import { useState } from 'react'
import React from 'react'
import './about.css'
import VisMis from './VisMis'
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedM, setIsExpandedM] = useState(false);
  
  const longTextM = "Our Mission is to empower users with easy-to-use,monetizable, and reliable services."
  const longText = "Our vision is to become the leading e-service platform for voting, ticketing and fundraising in Africa, driving inovation, transparency and finacial inclusion.";
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleReadMoreM = () => {
    setIsExpandedM(!isExpandedM);
  };
  return (
    <>
    <div id='about'>
        <div id="abt">
          <h6>About The Company</h6>
          <p>What You Should Know About <span>Vote</span>City</p>
        </div>
        <div id="misvis">
            <VisMis id={"mission"} textH3={"Mission"} p={longTextM} read={<span className='vM' onClick={toggleReadMoreM}>
  {isExpandedM ? 'Read Less' : 'Read More'}
</span>}/>
            <VisMis id={"vision"} textH3={"Vision"} p={isExpanded ? longText : `${longText.substring(0, 100)}...`} read={ <span className='vM' onClick={toggleReadMore}>
   {isExpanded ? 'Read Less' : 'Read More'}
 </span>}/>
        </div>
    </div>
    {/* <div id="con"> */}
         {/* <div id="contact"> */}
           {/* <h6>contact information</h6> */}
           {/* <p><span>Email</span>: support@votecity.ng</p> */}
           {/* <p><span>Phone Number</span>: +234 913 926 5486</p> */}
           {/* <p><span>Address</span>: Lagos State, Nigeria</p> */}
        {/* </div> */}
        {/* <div id="social"> */}
          {/* <h6>Our Social Media</h6> */}
        {/* </div> */}
    {/* </div> */}
   </>
  )
}



export default About
