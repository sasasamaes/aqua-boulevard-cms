import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const Section1 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section1-container bg-dark text-light">
      <Row>
        <NextImage image={homepage.attributes.section1.fondo} />
        <p>{homepage.attributes.section1.texto}</p>
        <NextImage image={homepage.attributes.section1.logo} />
      </Row>
    </Col>
  )
}

export default Section1
