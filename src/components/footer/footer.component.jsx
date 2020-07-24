import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCommentDots, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './footer.styles.css';

const Footer = () => (
    <footer className='footer'>
        <Container>
            <Row>
                <div className='col-md-4 text-center'>
                    <FontAwesomeIcon size='3x' className='footer-title' icon={faMapMarkerAlt} />

                    <h5>Get In Touch</h5>

                    <p>Струмица Македонија</p>

                    <p>
                        <a href='mailto:contact@youremail.com'>info.ritual-beauty@gmail.com</a>
                    </p>

                    <p>078 253 253</p>
                </div>

                <div className='col-md-4 text-center'>
                    <FontAwesomeIcon size='3x' className='footer-title' icon={faCommentDots} />

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
                    <FontAwesomeIcon size='3x' className='footer-title' icon={faLink} />
                    <h5>Useful Links</h5>

                    <a href='#' className='footer-links'>
                        Запознајте го тимот позади Rojal Beauty
                    </a>

                    <a href='#' className='footer-links'>
                        Услуги
                    </a>

                    <a href='#' className='footer-links'>
                        Ценовници
                    </a>
                </div>
            </Row>
        </Container>
        <Container fluid className='footer-bottom px-0'>
            <Row noGutters className='mx-0'>
                <div class='col-md-12 text-center'>
                    <p>
                        Copyright © 2020 <span class='template-name'>Rojal Beauty</span>. Made by{' '}
                        <a href='https://google.com' target='_blank'>
                            Igor Hristov
                        </a>
                    </p>
                </div>
            </Row>
        </Container>
    </footer>
);

export default Footer;
