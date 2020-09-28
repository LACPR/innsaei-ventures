import React from 'react'
import { Button } from 'react-bootstrap'
import './Sector.css'

const Sector = () => (
    <section id="sector" className="sector">
        <div className="container">
            <div className="row">
                <div className="col-5 align-items-center">
                    <div className="image-stack">
                        <div className="image-stack_item image-stack_item-top">
                            <img src="/images/phone1.png" id="top-image" alt="" />
                        </div>
                        <div className="image-stack_item image-stack_item-bottom">
                            <img src="/images/sector-bg.png" id="bottom-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-7 align-items-center justify-content-start text-left">
                    <div className="main-sector">
                        <h3 className="sector-focus">Sector Focus</h3>
                        <h4 className="invest">We invest in environmental and societal wellness with a holistic sense of interconnectivity.</h4>
                        <br />
                        <ul className="future">
                            <li>Future of living</li>
                            <li><em>Future of consumption</em></li>
                            <li><em>Future of communication</em></li>
                        </ul>                        
                        <p className="focus">Innsaei focuses on technological advancements in the areas of robotics, Smart Homes, and Smart Cities. These technologies will change the way we live, including how we envision homes, communities, and cities. These changes will be widespread and sweeping impacting how we plan, design, build and use homes.</p>
                        <br />
                        <Button id="learn" className="btn"><p className="learn-more">Learn more</p></Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Sector