import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { courseContext } from '../../App';
import HomeCard from '../HomeCard/HomeCard';
import './Service.css'

const Service = () => {
    const courses = useContext(courseContext)
    return (
        <>
            <div className="service" style={{ background: `url(${"https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-Banner.jpg"})` }}>
            <Container>
          <Row className=' service-row align-items-center text-white'>
                        <Col>
                            <h6>START WITH</h6>
              <h1>Professional Online Courses For Achievers</h1>
              
            </Col>
            <Col></Col>
          </Row>
        </Container>
            </div>
            <Container>
            <Row className="offset-2 py-5">
                <Col md={8} className="text-center">
                    <h1>Professional Online Courses</h1>
                    <p>Offering miscellaneous courses and online programs for fresh university graduates or college pass outs that want to pursue an aspiring career.</p>
                </Col>
            </Row>
             <Row xs={1} md={3} className="">

            {
                courses.map(course=> <HomeCard key={Math.random()} service={course}></HomeCard>)
                }
            
        </Row>
       </Container>

        </>
    );
};

export default Service;