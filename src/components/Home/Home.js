import React, { useContext} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { courseContext } from "../../App";
import HomeCard from "../HomeCard/HomeCard";
import "./home.css";
import HomeItem from "./HomeCard/HomeItem";

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
            <Col className="mt-sm-5 pt-sm-5">
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
            <HomeItem  img='https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Books-and-library.png' title="Books And Library" para="Innovating new ideas via scientific learning process" />
          </Col>
          <Col>
            <HomeItem  img='https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Professional-educator.png' title="Professional Educator" para="Education is the key to prosperity among the youth" />
          </Col>
          <Col>
            <HomeItem  img='https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Focus-on-achievement.png' title="Focus On Achievement" para="New life come and new Achievement arive" />
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
