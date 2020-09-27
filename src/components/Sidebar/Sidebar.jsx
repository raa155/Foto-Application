import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

const Sidebar = ()=> {
    return(
       
        <div className="sidenav">
            <div className="wrapper">
                <h1 className="sidebar-name">Foto&#8482;</h1>
                <a className="sidenav-links" ><Link to="/">HOME</Link></a>
              
                <a className="sidenav-links" ><Link to="/About">ABOUT</Link></a>
            
                <a className="sidenav-links" ><Link to="/Contact">CONTACT</Link></a>
            </div>

            <div className="social-links">
                    <ul className="inline-list">
                        <li>
                        <a title="Twitter" href="">
                            <i className="fa fa-twitter social-icon" aria-hidden="true"></i>
                        </a> 
                        </li>
                        <li>
                            <a title="Facebook" href="">
                            <i className="fa fa-facebook social-icon" aria-hidden="true"></i>
                            </a> 
                        </li>
                        <li>
                            <a title="Pinterest" href="">
                            <i className="fa fa-pinterest-p social-icon" aria-hidden="true"></i>
                            </a> 
                        </li>
                        <li>
                            <a title="Instagram" href="">
                            <i className="fa fa-instagram social-icon" aria-hidden="true"></i>
                            </a> 
                        </li>
                    </ul>
                    <div>
                        <p className="copyright">2020 © Foto</p>
                    </div>
                </div>
    
    </div>
    )
}

export default Sidebar;