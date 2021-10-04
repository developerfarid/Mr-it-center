import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhiloCard from "../PhiloCard/PhiloCard";
const About = () => {
  const [philo, setPhilo] = useState([])
  useEffect(() => {
    fetch("./philosophy.json").then(res=> res.json()).then(data => setPhilo(data))
  })
  return (

    <>
      <div
        className='about'
        style={{
          background: `url(${"	https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/Abaout-us-Banner-1.jpg"})`,
        }}>
        <Container>
        <Row className=' service-row align-items-center text-white'>
          <Col className="pt-4">
            <h6  className="pt-4">ABOUT US</h6>
            <h1>Inspiring Bright Minds</h1>
          </Col>
          <></>
        </Row>
      </Container>
      </div>
      <Container>
        <Row className="align-items-center py-5 mt-5">
          <Col>
            <div className="about-img border-5">
              <img src={"https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/About-01.jpg"} alt="" />
            </div>
          </Col>
          <Col>
            <div className="about-text">
              <h6 className="mt-5">ABOUT US</h6>
              <h2>Limitless Learning And Get More Possibilities</h2>
              <p>We specialize in providing professional & practical support to international students looking for admission at some of the most deemed universities across the globe.
                Have successfully placed over 3500 students in some of the reputable universities across the US.</p>
              <p className="mb-0">Brayden Backham</p>
              <p>Director</p>
              
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <h5>OUR PHILOSOPHY</h5>
          <h3>We Believe In Our Good Education And Development System And We Know How To Work Together To Reach Greater Success.</h3>
          <Row xs={1} md={2} lg={4} className="my-5">
            {
              philo.map((item, i)=> <PhiloCard key={i} item={item} />)
            }
          </Row>
        </Row>
      </Container>
      
    </>
  );
};

export default About;
