import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { courseContext } from '../../App';
import HomeCard from '../HomeCard/HomeCard';

const Service = () => {
    const courses = useContext(courseContext)
    return (
        <Container>
            <Row className="offset-2 py-5">
                <Col md={8} className="text-center">
                    <h1>Professional Online Courses</h1>
                    <p>Offering miscellaneous courses and online programs for fresh university graduates or college pass outs that want to pursue an aspiring career.</p>
                </Col>
            </Row>
             <Row md={3} className="">

            {
                courses.map(course=> <HomeCard service={course}></HomeCard>)
                }
            
        </Row>
       </Container>
    );
};

export default Service;