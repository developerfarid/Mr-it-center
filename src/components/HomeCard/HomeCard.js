import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "@restart/ui/esm/Button";
import { Link, NavLink } from "react-router-dom";
const elementEmpty = <FontAwesomeIcon style={{color:"green"}} icon={faStar} />;

const HomeCard = ({ service }) => {
  const {id ,title, img, price, rating, enroll, catagory, lesson } =
    service;
  
  return (
    <div className="mb-5">
      <Card className=" h-100">
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <p className='text-muted d-flex justify-content-between align-items-center'>
            <span>{catagory}</span> <span className='price'>${price}</span>
          </p>

          <Card.Title ><Link className="text-info text-decoration-none" to={`/course/${id}`}>{title}</Link></Card.Title>
          <p className='d-flex justify-content-between'>
            <Rating
              readonly
              emptySymbol='fa fa-star-o'
              initialRating={rating}
              fullSymbol={elementEmpty}></Rating>
            <span>{`(${rating})`}</span>
          </p>
          <p className='d-flex justify-content-between'>
            <span>{lesson} Lession</span> <span>{enroll} Students</span>
          </p>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card>
          <Button className="w-100 text-white fw-normal btn btn-info">BUY THIS COURSE</Button>
        </Card>
      </Card>
    </div>
  );
};

export default HomeCard;
