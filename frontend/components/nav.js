import React from "react"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import NextImage from "./image"

const Nav = ({ global }) => {
  const styleImg = {
    width: 10,
    height: 10,
  }
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <Navbar.Brand href="/">
              <NextImage
                image={global.attributes.logo}
                className="navbar-img"
              />
            </Navbar.Brand>
          </Col>
          <Col lg={6}>
            <p>{global.attributes.navTitle}</p>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Nav
