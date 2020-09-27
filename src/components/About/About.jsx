import React from 'react';
import './About.css';

const About = ()=> {
    return(
                <div className="about-section">
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="about-img" src="https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""></img>
                    </div>
                </div>
            </div>

            
            <div className="container ">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-left mt-4 pb-3">My Name is Amelia</h1>
                        <p></p>
                        <p  className="about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam possimus est repellendus, ipsum laudantium magni libero corporis voluptates magnam. Natus beatae maiores ipsam alias laudantium harum, nobis incidunt necessitatibus.</p>
                        <p></p>
                        <p className="about-me">I understand that in order for me to capture beautiful images i must create relax environment.i specialize in senior photography ,life style,wedding and event photography,i look forward to meeting you and discussing for your photography needs and it take great pride in capturing the true spirit and personality of people. my style has been described as creative, fun, engaging and relaxed.</p>
                        <p></p>
                        <div className="about-clients">
                            <span>Clients:</span>
                            <a href="">Apple</a>
                            ,
                            <a href="">H&M</a>
                            ,
                            <a href="">Chipotle</a>
                            ,
                            <a href="">Jeep</a>
                            
                        </div>
                        <div className="about-industry">
                            <span>Industry:</span>
                            <a href="">Fashion</a>
                            ,
                            <a href="">Technology</a>
                            ,
                            <a href="">Food</a>
                            ,
                            <a href="">Automobile</a>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="about-email">
                                    <span>Contact : </span>
                                    <a href=""> <span>info@fotoamelia.com</span></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6" >
                                <ul className="about-list">
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
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>

            </div>
            </div>
    )
}


export default About;