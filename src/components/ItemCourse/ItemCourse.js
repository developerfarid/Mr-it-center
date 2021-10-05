import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { courseContext } from '../../App';



const ItemCourse = () => {
    // use context api
    const course = useContext(courseContext)
    // use hook use params
    const { id } = useParams()
// find only data 
    const findItem = course.find(item => item?.id === Number(id))
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    {/* information */}
                    <Col md={8} xs={12} className="p-md-5">
                        <div className="item-text">
                            <h3 className="mb-5">{findItem?.title}</h3>
                            <img className="img-fluid" src={findItem?.img} alt="" />
                            <h3 className="my-5">COURSE DESCRIPTION</h3>
                            <p>{findItem?.description }</p>
                        </div>
                    </Col>
                    {/* card */}
                    <Col md={4} xs={12}>
                        <div className=" mt-5 card-item text-white ">
                            <p className="bg-info fw-bold fs-4 p-3 d-flex justify-content-between"><span>Course Value</span><span>${findItem?.price}</span></p>
                            <div className=" text-dark card-dec">
                                <p className=" px-2 d-flex justify-content-between"><span>Enrolled: <b>{findItem?.enroll }</b> Students</span><span><i className="fas fa-users"></i></span></p>
                                <p className=" px-2 d-flex justify-content-between"><span>Video Lesson: <b>{findItem?.time }</b> Hours</span><span><i className="fas fa-hourglass-end"></i></span></p>
                                <p className=" px-2 d-flex justify-content-between"><span>Lectures: <b>{findItem?.lesson }</b></span><span><i className="fas fa-assistive-listening-systems"></i></span></p>
                                <p className=" px-2 d-flex justify-content-between"><span>Level: <b>{findItem?.lavel}</b></span><span><i className="fas fa-balance-scale-left"></i></span></p>
                                <Button  className="w-100 text-white fw-normal btn btn-info">BUY THIS COURSE</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemCourse;