import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import './footer.styles.css';

const Footer = () => (
    <footer className='footer'>
        <Container>
            <Row>
                <div className='col-md-4 text-center'>
                    <h5>Get In Touch</h5>

                    <p>Струмица Македонија</p>

                    <p>
                        <a href='mailto:contact@youremail.com'>info.rojal-beauty@gmail.com</a>
                    </p>

                    <p>078 253 253</p>
                </div>

                <div className='col-md-4 text-center'>
                    <h5>Social Media</h5>

                    <p>Каде можете да не најдете.</p>

                    <ul className='footer_social'>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-facebook' icon={faFacebookSquare} />
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-instagram' icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-twitter' icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-youtube' icon={faYoutubeSquare} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='col-md-4 text-center'>
                    <h5>Get In Touch</h5>

                    <p>Струмица Македонија</p>

                    <p>
                        <a href='mailto:contact@youremail.com'>info.rojal-beauty@gmail.com</a>
                    </p>

                    <p>078 253 253</p>
                </div>
            </Row>
        </Container>
        <div class='container-fluid footer-bottom px-0'>
            <div class='row no-gutters mx-0'>
                <div class='col-md-12 text-center'>
                    <p>
                        Copyright © 2020 <span class='template-name'>Rojal Beauty</span>. Made by{' '}
                        <a href='https://google.com' target='_blank'>
                            Igor Hristov
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
