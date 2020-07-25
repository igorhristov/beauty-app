import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouseComponent = () => (
    <Carousel >
        <Carousel.Item>
            <img className='d-block w-100' src='https://149361731.v2.pressablecdn.com/wp-content/uploads/2018/08/rl-nike-statue-1920x630.jpg' alt='First slide' />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src='https://nicegiftforyou.com/image/cache/catalog/slider/nicegift-slideshow-01-1920x630.jpg' alt='Third slide' />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src='https://149361731.v2.pressablecdn.com/wp-content/uploads/2018/08/rl-shaking-hands-1920x630.jpg' alt='Third slide' />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default CarouseComponent