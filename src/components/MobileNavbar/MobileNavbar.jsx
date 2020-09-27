import React from 'react';
import './MobileNavbar.css'
import {Link} from 'react-router-dom';
import handleToggle from './utils';
const MobileNavbar = ()=> {
 
    return(
      
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
            <a className="navbar-brand" href="#">Foto &#8482;</a>
            <button className="navbar-toggler" refs="slide" type="button" data-toggle="slide-collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <h1 className="pt-3 mobile-nav-title">Foto</h1>  
                <a className="nav-item nav-link active" >Home <Link to="/">HOME</Link></a>
                <a className="nav-item nav-link" href="/about.html"><Link to="/About">ABOUT</Link></a>
                <a className="nav-item nav-link" href="/contact.html"><Link to="/Contact">CONTACT</Link></a>
            </div>
            </div>
        </nav>
    )
}

export default MobileNavbar;