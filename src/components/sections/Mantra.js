import React from 'react'
import './Mantra.css'

const Mantra = () => (
    <section id="mantra" className="mantra">
        <div className="container align-items-center justify-content-start">
            <div className="mantra-bg">
                <div className="row align-items-center justify-content-start">
                    <div id="content" className="col-7 align-items-center">
                        <h1 className="our-mantra">Our Mantra</h1>
                        <h4 className="equation">Profitability + Data + Impact = Innsaei</h4>
                        <br />
                        <p className="mantra-details">The meaning of our brand comes from the ancient icelandic word for <em>intuition:</em> "Innsaei". It also means to <em>"see within"</em>, <em>"the sea within"</em> and <em>"to see inside out"</em>. The word describes the human ability of being able to perceive and understand the world beyond our five senses and rational mind.</p>
                        <p className="mantra-details">We focus on profitability, data and impact, to have the eye to recognize promising ideas and connect to our intuition to spot the underlying variables playing a role in the venture ecosystem.</p>
                    </div>
                    <div className="col-5">
                        <img id="mantra-img" className="align-items-center" src="/images/mantra-graphic.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
</section>
)

export default Mantra