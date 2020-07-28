import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from '../../components/carousel/carousel.component';
import ParallaxComponent from '../../components/parallax/parallax.component';

const HomePage = () => (
    <Container fluid className="p-0">
        <Row>
            <Col>
                <CarouselComponent />
                <ParallaxComponent />
            </Col>
        </Row>
    </Container>
);

export default HomePage;
