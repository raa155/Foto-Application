import React from 'react';
import './Contact.css';
const Contact = ()=> {
    return(
                <div class="contact">
                    
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                      
                    </div>
                </div>




                <section>
                <div class="contact-section">
                    <div class="container">
                        <div class="row divider">
                            <div class="col-lg-12">
                                <h1 class="text-center contact-title">Let's work together.</h1>
                                <p class="text-center contact-description">Don’t hesitate to chat with us, just drop a line below or contact via email.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 text-left">
                                <h4>Foto Photography</h4>
                                <address>
                                Roman Abad
                                <br></br>
                                site@foto.com
                                <br></br>
                                +1 (800) 555 0100
                                </address>
                                <h4>Foto Photography</h4>
                                <address>
                                Roman Abad
                                <br></br>
                                site@foto.com
                                <br></br>
                                +1 (800) 555 0100
                                </address>
                                <h4>Foto Photography</h4>
                                <address>
                                Roman Abad
                                <br></br>
                                site@foto.com
                                <br></br>
                                +1 (800) 555 0100
                                </address>
                            </div>
                            <div class="col-lg-8">
                                <form action="/contact" method="POST" class="contact-form form-group">
                                    <label class="contact-label" for="email" name="email">Email Address</label>
                                    <input class="form-control contact-inputs" type="text"></input>
                                    <label class="contact-label" for="subject" name="subject">Subject</label>
                                    <input class="form-control contact-inputs" type="text"></input>
                                    <label class="contact-label" for="message" name="message">Message</label>
                                    <textarea class="form-control contact-inputs" name="" id="" cols="30" rows="10"></textarea>
                                    <button  class="btn btn-dark" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </section>
                </div>
    )
}

export default Contact;