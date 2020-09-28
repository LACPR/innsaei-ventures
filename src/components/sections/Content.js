import React from 'react'
import './Content.css'

const Content = () => (
    <section id="content" className="content">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <p className="content-heading">Our model</p>
                    <img className="content-icons" src="/innsaei-ventures/images/model.png" alt="" />
                    <h5 className="content-details">At Innsaei Capital, our goal isn't merely growth</h5>
                </div>            
                <div className="col-4">
                    <p className="content-heading">Startups</p>
                    <img className="content-icons" src="/innsaei-ventures/images/startup.png" alt="" />
                    <p className="content-info">We understand that early-stage companies need more than funding. They need partners who can support them to effectively take off their business.</p>
                </div>
                <div className="col-4">
                    <p className="content-heading">Insiders</p>
                    <img className="content-icons" src="/innsaei-ventures/images/insider.png" alt="" />
                    <h5 className="content-details">Empowering our Insiders to chase diversified opportunities</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className="content-heading">Investment Philosophy</p>
                    <img className="content-icons" src="/innsaei-ventures/images/investment.png" alt="" />
                    <h5 className="content-details">We prioritize human-centered needs</h5>
                </div>
                <div className="col-4">
                    <p className="content-heading">AskRia</p>
                    <img className="content-icons" src="/innsaei-ventures/images/askria.png" alt="" />
                    <h5 className="content-details">Your data-driven guidance to invest smarter</h5>
                </div>
                <div className="col-4">
                    <p className="content-heading">Insights</p>
                    <img className="content-icons" src="/innsaei-ventures/images/insight.png" alt="" />
                    <h5 className="content-details">Providing cutting-edge industry insights</h5>
                </div>
            </div>
        </div>
    </section>
)

export default Content