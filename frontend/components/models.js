import React, { useState } from "react"
import { Row, Col, Button, Modal } from "react-bootstrap"
import NextImage from "./image"

const Models = ({ models, lg }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Col lg={lg} className="models-container bg-light">
      <h3>Facilitamos la mejor opción para que establezca su hogar</h3>
      <Row>
        <Col className="models-menu">
          <Row>
            {models.map((model) => (
              <>
                <Col key={models.length}>
                  <h3>{model.attributes.Titulo}</h3>
                  <p>{model.attributes.Precio}</p>
                  <p>{model.attributes.Descripcion}</p>
                  <Button variant="primary" onClick={handleShow}>
                    VER PLANO
                  </Button>
                </Col>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <NextImage image={model.attributes.Plano} />
                      </Col>
                      <Col>
                        <h3>{model.attributes.Titulo}</h3>
                        <p>{model.attributes.Precio}</p>
                        <p>{model.attributes.Descripcion}</p>
                        <Button variant="primary">RECORRIDO VIRTUAL</Button>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
              </>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Models
