import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const Section2 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section2-container bg-dark text-light">
      <Row>
        <h3>{homepage.attributes.section2.titulo}</h3>
        <NextImage image={homepage.attributes.section2.img} />
        <p>{homepage.attributes.section2.descripcion}</p>
      </Row>
    </Col>
  )
}

export default Section2
