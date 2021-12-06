import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import NextImage from "./image"

const Banner = ({ homepage, lg }) => {
  const styleImg = {
    width: 30,
    height: 30,
  }
  return (
    <Col lg={lg} className="banner-container bg-dark text-light">
      <Row>
        <Col>
          <NextImage image={homepage.attributes.banner.logo} style={styleImg} />
        </Col>
        <Col>
          <h3>{homepage.attributes.banner.titulo}</h3>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            {homepage.attributes.banner.boton}
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

export default Banner
