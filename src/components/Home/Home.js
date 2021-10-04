import React, { useContext} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { courseContext } from "../../App";
import HomeCard from "../HomeCard/HomeCard";
import "./home.css";

const Home = () => {
  // use context api 
    const courses = useContext(courseContext)
  return (
    <>
      <div
        className='home'
        style={{
          background: `url(${"https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/Banner-home-03-1.jpg"})`,
        }}>
        <Container>
          <Row xs={1} md={2} className=' my-row align-items-center'>
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
        <Row className='my-4' xs={1} md={2} lg={3}>
          <Col>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-2 pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Books-and-library.png"
                    }
                    className='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>Books And Library</h5>
                    <p className='card-text'>
                      Innovating new ideas via scientific learning process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-2  pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Professional-educator.png"
                    }
                    alt='...'
                  />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>Professional Educator</h5>
                    <p className='card-text'>
                      Education is the key to prosperity among the youth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-2  pt-4 ps-4'>
                  <img
                    src={
                      "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Focus-on-achievement.png"
                    }
                    alt='...'
                  />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>Focus On Achievement</h5>
                    <p className='card-text'>
                      Innovating new ideas via scientific learning process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
              </Row>
              <Row className="offset-2 py-5">
                <Col md={8} className="text-center">
                    <h1>Professional Online Courses</h1>
                    <p>Offering miscellaneous courses and online programs for fresh university graduates or college pass outs that want to pursue an aspiring career.</p>
                </Col>
            </Row>
              <Row xs={1} md={2} lg={3}>
                  {
                    // eslint-disable-next-line no-undef
                    courses.slice(0, 3).map(service => <HomeCard key={Math.random()} service={service} />)
                    
                  }
              </Row>
      </Container>
    </>
  );
};

export default Home;
