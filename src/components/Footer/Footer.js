import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row xs={1} md={2} lg={4}>
                    <Col>
                        <div className="footer-item">
                            <h2>MR IT</h2>
                            <p>A premier educational consultant & institution focussing on providing quality learning to university students aspiring for a bright career.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Navigation</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="nav-link text-white" to='/home'>Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link  text-white" to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white"to='/service'>Service</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white"to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>About</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="nav-link text-white" to='/'>Membership Login</Link>
                                </li>
                                <li>
                                    <Link className="nav-link  text-white" to='/'>About Me</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white"to='/'>Terms of Conditions</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white"to='/'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Contact</h3>
                            <ul className="list-unstyled">
                                <li>
                                121 King St, Melbourne VIC
                                </li>
                                <li>
                                3000, Australia
                                </li>
                                <li>
                                888-123-4587
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;