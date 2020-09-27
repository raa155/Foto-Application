import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import Gallery from './Gallery/Gallery';

const HomeSection = ()=> {
    return(
        <div>
              <Sidebar />
              <MobileNavbar />
              <Gallery />
        </div>
      


    )
}

export default HomeSection;