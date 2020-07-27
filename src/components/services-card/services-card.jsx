import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './services-card.styles.css';

const ServicesCard = ({ imgUrl, title, body }) => (
    <Card className='' style={{ borderColor: 'transparent', boxShadow: '1px 1px 3px  #EC4090' }}>
        <Card.Img variant='bottom' src={require(`../../../assets/images/${imgUrl}`)} width='400' height='170' />
        <Card.Header
            className='d-flex align-items-center justify-content-center text-center font-weight-bold p-2'
            style={{ minHeight: '87px', background: 'none', borderColor: 'transparent', color: '#EC4090' }}
        >
            {title}
        </Card.Header>
        <Card.Body className='mt-0 pt-0'>
            <Card.Text className='mt-0 pt-0'>{body[0].slice(0, 135) + '...'}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'none', borderColor: 'transparent' }}>
            <Button variant='outline-danger' className='ServicesButton '>
                {'Повеќе' + ` >>>`}
            </Button>
        </Card.Footer>
    </Card>
);

export default ServicesCard;
