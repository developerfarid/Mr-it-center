import React, { useContext} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { courseContext } from "../../App";
import HomeCard from "../HomeCard/HomeCard";
import "./home.css";

const Home = () => {
    const courses = useContext(courseContext)
  return (
    <>
      <div
        className='home'
        style={{
          background: `url(${"https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/Banner-home-03-1.jpg"})`,
        }}>
        <Container>
          <Row className=' my-row align-items-center'>
            <Col>
              <h1>Embark On An Ambitious Path With EduSphere Ideas</h1>
              <p>
                Our expertise can help all aspiring students find the right
                educational institution and career-path to suit their specific
                goals, including affordability.
              </p>
              <Button>Read More</Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='my-4'>
          <Col>
            <div class='card mb-3'>
              <div class='row g-0'>
                <div class='col-md-2 pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Books-and-library.png"
                    }
                    class='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div class='col-md-10'>
                  <div class='card-body'>
                    <h5 class='card-title'>Books And Library</h5>
                    <p class='card-text'>
                      Innovating new ideas via scientific learning process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card mb-3'>
              <div class='row g-0'>
                <div class='col-md-2  pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Professional-educator.png"
                    }
                    alt='...'
                  />
                </div>
                <div class='col-md-10'>
                  <div class='card-body'>
                    <h5 class='card-title'>Professional Educator</h5>
                    <p class='card-text'>
                      Education is the key to prosperity among the youth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card mb-3'>
              <div class='row g-0'>
                <div class='col-md-2  pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Focus-on-achievement.png"
                    }
                    alt='...'
                  />
                </div>
                <div class='col-md-10'>
                  <div class='card-body'>
                    <h5 class='card-title'>Focus On Achievement</h5>
                    <p class='card-text'>
                      Innovating new ideas via scientific learning process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
              </Row>
              <Row xs={2} md={3} lg={3}>
                  {
                    // eslint-disable-next-line no-undef
                    courses.slice(0, 3).map(service => <HomeCard service={service} />)
                    
                  }
              </Row>
      </Container>
    </>
  );
};

export default Home;
