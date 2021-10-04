import React from 'react';
import { Col } from 'react-bootstrap';

import './philoCarid.css'

const PhiloCard = ({ item }) => {

    const {title, des, img}=item
    return (
        <Col className="mb-4">
            <div className="philo-card position-relative">
                <div className="img-div">
                <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="philo-text text-white text-center position-absolute">
                    <h3>{title.toUpperCase()}</h3>
                    <p>{ des}</p>
                </div>
            </div>
        </Col>
    );
};

export default PhiloCard;