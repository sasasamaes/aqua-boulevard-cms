import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const Amenities = ({ amenities, lg }) => {
  const styleImg = {
    width: 30,
    height: 30,
  }
  return (
    <Col lg={lg} className="amenities-container bg-light">
      <Row>
        <Col className="amenities-menu">
          <Row>
            {amenities.map((amenity) => (
              <Col>
                <h3>{amenity.attributes.Titulo}</h3>
                {/* <NextImage image={amenity.attributes.Icono} style={styleImg} /> */}
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="amenities-slider">{/* <Slider lg={9} /> */}</Col>
      </Row>
    </Col>
  )
}

export default Amenities
