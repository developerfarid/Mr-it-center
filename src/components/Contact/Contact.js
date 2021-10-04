import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div
        className='contact'
        style={{
          background: `url(${"https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Contact-02-banner.jpg"})`,
              }}>
              <Container>
          <Row md={2} xs={1} className=' service-row align-items-center text-white'>
                        <Col>
                          <h1>Are You Interested In Online Learning? Contact Us.</h1>
                          <p>Contact our top-notch educationalist in the UK that has huge expertise in providing futuristic solutions to all aspiring students coming for higher education.</p>
              
            </Col>
          </Row>
        </Container>
        </div>
      <Container>
        <Row xs={1} md={2} className=" mt-5 align-items-center">
                  <Col>
            <Card className="text-center  border-0  p-3">
              <Card.Img className="img-fluid m-auto my-card" variant='top' src={"https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/Contact.png"} />
              <Card.Body>
                <Card.Title>Contact Details</Card.Title>
                <Card.Text>
                Phone: 888-123-4587 <br />

Mail: info@example.com
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center  border-0 p-3">
              <Card.Img className="img-fluid m-auto my-card" variant='top' src={"https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/Location.png"} />
              <Card.Body>
                <Card.Title>Opening Hours</Card.Title>
                <Card.Text>
                Monday-Friday <br />
10:30a.m-7:00p.m
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center  border-0 p-3">
              <Card.Img className="img-fluid m-auto my-card" variant='top' src={"https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/Time.png"} />
              <Card.Body>
                <Card.Title>Area Location</Card.Title>
                <Card.Text>
                121 King St, Melbourne VIC 3000, <br /> Australia
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className='login-box'>
              <h2>Contact Us</h2>
              <form>
                <div className='user-box'>
                  <input type='text' name='' required='' />
                  <label>Username</label>
                </div>
                <div className='user-box'>
                  <input type='email' name='' required='' />
                  <label>Email</label>
                </div>
                <a href='/'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
