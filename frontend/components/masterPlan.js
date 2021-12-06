import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const MasterPlan = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="master-container bg-dark text-light">
      <Row>
        <Col lg={12} className="master-img">
          <NextImage image={homepage.attributes.master.plano} />
        </Col>
        <Col lg={12} className="master-container-info">
          <Row>
            <Col lg={3} className="master-button">
              <Button variant="primary" type="submit">
                {homepage.attributes.master.boton}
              </Button>
            </Col>
            <Col lg={3} className="master-button">
              <p>{homepage.attributes.master.descripcion}</p>
            </Col>
            <Col lg={3} className="master-disclaimer">
              <p>{homepage.attributes.master.descargo}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default MasterPlan
