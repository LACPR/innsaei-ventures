import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Subscribe.css'

const Subscribe = () => (
    <section id="subscribe" className="subscribe">
        <div className="container">
            <div className="row  align-items-center">
                <div className="insights  text-left">
                    <h4 className="subscribe-heading">Insights.</h4>
                    <h4 className="subscribe-heading">Find out about tomorrow's trends today</h4>
                    <p className="subscribe-content">Distilled content  /  World-class financial insights  /  The latest trends</p>
                    <div className="emails">
                        <Form className="sub-form">
                            <Form.Group className="email-form" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your E-mail"></Form.Control>
                            </Form.Group>
                            <Button className="btn align-items-center justify-content-center" type="submit"><h4 className="subscribe-btn">Subscribe</h4></Button>
                            <img id="contact" src="/images/contact.png" alt="" />
                            <p>Contact Us</p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Subscribe

