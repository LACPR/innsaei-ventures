import React from 'react'
import './Terms.css'

const Terms = () => (
    <section id="terms" className="terms">
        <div className="container align-items-center justify-content-start text-left">
            <div className="row">
                <div className="col-9">
                    <h3>Your Financing, Your Terms!</h3>
                    <p>Our alternative capital helps companies to accelerate long-term growth without the need of dilution.</p>
                    <div className="your-terms">
                        <div className="col-4">
                            <img className="polygon1" src="/innsaei-ventures/images/polygon1.png" alt="" />
                            <img className="polygon2" src="/innsaei-ventures/images/polygon2.png" alt="" />
                            <p><strong>Profit Share</strong></p>
                            <p>Shared risk and returns, with our 'Profit-First' approach</p>
                        </div>
                        <div className="col-4">
                            <img className="hex1" src="/innsaei-ventures/images/hex1.png" alt="" />
                            <img className="hex2" src="/innsaei-ventures/images/hex2.png" alt="" />
                            
                            <p><strong>Fast and Unbiased</strong></p>
                            <p>Our machine learning assistant, AskRia ensures a quick, human-biased free process</p>
                        </div>
                        <div className="col-4">
                            <img className="triangle1" src="/innsaei-ventures/images/triangle1.png" alt="" />
                            <img className="triangle2" src="/innsaei-ventures/images/triangle2.png" alt="" />
                            <br />
                            <p><strong>Non-dilutive</strong></p>
                            <p>Empowered funders retain full control of their company</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <img id="terms-img" src="/innsaei-ventures/images/terms.png" alt="" />
                </div>
            </div>
        </div>
    </section>
)

export default Terms