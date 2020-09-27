import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import Contact from './Contact/Contact';

const ContactSection = ()=> {
    return(
        <div>
              <Sidebar />
              <MobileNavbar />
              <Contact />
        </div>
      


    )
}

export default ContactSection;