import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const MasterPlan = ({ homepage, lg, amenities }) => {
  console.log(amenities)
  return (
    <Col lg={lg} className="master-container bg-light ">
      <Row>
        <Col lg={12} className="master-img">
          <NextImage image={homepage.attributes.master.plano} />
        </Col>
        <Col lg={12} className="master-container-info">
          <Row>
            <Col lg={4} className="master-title">
              <Col lg={12} className="master-title">
                <h3>{homepage.attributes.master.titulo}</h3>
              </Col>
              <Col lg={12} className="master-button">
                <Button variant="primary" type="submit">
                  {homepage.attributes.master.boton}
                </Button>
              </Col>
            </Col>
            <Col lg={8} className="master-button">
              <ol>
                {amenities.map((amenity) => (
                  <li>{amenity.attributes.Titulo}</li>
                ))}
              </ol>
            </Col>
            <Col lg={12} className="master-disclaimer disclaimer">
              <p>{homepage.attributes.master.descargo}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default MasterPlan
