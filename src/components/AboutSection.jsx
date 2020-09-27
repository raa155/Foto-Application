import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import About from './About/About';

const AboutSection = ()=> {
    return(
        <div>
              <Sidebar />
              <MobileNavbar />
              <About />
        </div>
      


    )
}

export default AboutSection;