import React from "react"
import { Col, Row } from "react-bootstrap"

const ServiceComponent = ({ services, lg }) => {
  return (
    <Col lg={lg} className="service-container bg-dark p-4">
      <Row>
        {services.map((service) => (
          <Col className="service-item" key={`service-item-${service.id}`}>
            <h3>{service.attributes.Texto}</h3>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default ServiceComponent
