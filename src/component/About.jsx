import React from 'react';
import Common from './Common';
import web from "./images/p2.avif"


const About = () => {
  return (
    <div>
       <Common name="welcome to about page" imgsrc={web} visit="/contact" btname="contact now"/>
    </div>
  )
}

export default About;
