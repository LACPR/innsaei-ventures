import React from 'react'
import { Button } from 'react-bootstrap'
import './Help.css'

const Help = () => (
    <section id="help" className="help">
        <div className="container">
            <div className="row">
                <div className="help-bg align-items-center">
                    <div className="row">
                        <div className="col-9">
                            <div className="help-para">
                                <p className="help1">Hey there! I'm your personal investment specialist.</p>
                                <p className="help2">I'm not going to say I have all the answers but I certainly will help you find them.</p>
                                <p className="help3">Tell me about you: Why are you here in the first place?</p>
                                <div className="help-buttons">
                                    <Button id="button1" className="btn" type="submit"><h4 className="button-title">I am an Entrepreneur</h4></Button>
                                    <Button id="button2" className="btn" type="submit"><h4 className="button-title">I want to be an insider</h4></Button>
                                    <Button id="button3" className="btn" type="submit"><h4 className="button-title">I want to be an influencer</h4></Button>
                                </div>
                                <p className="get-touch">Get in touch with us</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <img id="askria-logo" src="/images/logo-askria.png" alt="" />
                        </div>    
                    </div> 
                </div>
            </div>
        </div>
    </section>
)

export default Help