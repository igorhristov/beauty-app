import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './footer.styles.css';

const Footer = () => (
    <footer className='footer'>
        <Container>
            <Row>
                <div className='col-md-4 text-center'>
                    <h5>Get In Touch</h5>

                    <p>10 Oxford Street, London, UK, E1 1EC</p>

                    <p>
                        <a href='mailto:contact@youremail.com'>the-office@salespage.co.uk</a>
                    </p>

                    <p>+44 987 654 321</p>
                </div>

                <div className='col-md-4 text-center'>
                    <h5>Social Media</h5>

                    <p>See bellow where you can find us.</p>

                    <ul className='footer_social'>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-twitter' icon={faTwitter} />
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-instagram' icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon className='i fa-facebook' icon={faFacebookSquare} />
                            </a>
                        </li>
                    </ul>
                </div>
            </Row>
        </Container>
    </footer>
);

export default Footer;
