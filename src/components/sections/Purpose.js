import React from 'react'
import './Purpose.css'

const Purpose = () => (
    <section id="purpose" className="purpose">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="images-container">
                        <div className="images-stack">
                            <div className="images-stack_item images-stack_item-top">
                                <img src="/innsaei-ventures/images/purpose-up.png" id="top-image" alt="" />
                            </div>
                            <div className="images-stack_item images-stack_item-bottom">
                                <img src="/innsaei-ventures/images/purpose-bg.png" id="bottom-image" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="purposes align-items-center justify-content-start text-left">
                        <h3 className="purpose-heading">Diversity is a mindset, but inclusion is about action</h3>
                        <p className="purpose-details">Our purpose is to support amazing founders and ideas which will bring fundamental and collective changes to put investment ecosystem, environment and society.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Purpose