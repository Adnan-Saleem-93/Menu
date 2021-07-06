import React from "react";
import {Image, Media, Col} from "react-bootstrap";

const Item = (props) => {
  let {title, price, img, desc} = props; // destructure properties
  return (
    <Col className="item" md={6}>
      <Media>
        <Image src={img} alt={title} />
        <Media.Body>
          <div>
            <h5 className="title">{title}</h5>
            <h6 className="price">${price}</h6>
          </div>
          <p className="description">{desc}</p>
        </Media.Body>
      </Media>
    </Col>
  );
};

export default Item;
