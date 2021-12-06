import React from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import NextImage from "./image"

const FormComponent = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="form-container bg-dark" padding={0}>
      <Row padding={0}>
        <Col lg={12} className="form-container-logo">
          <NextImage image={homepage.attributes.form.logo} />
        </Col>
        <Col lg={12} className="form-container-info text-light">
          <p>{homepage.attributes.form.direccion}</p>
          <h2>{`Desde ${homepage.attributes.form.precio}`}</h2>
          <span>{homepage.attributes.form.descargo}</span>
        </Col>
        <Col lg={12} className="form-container-form text-light">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Nombre Completo*" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Correo*" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTel">
              <Form.Control type="text" placeholder="Teléfono*" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="text" placeholder="Motivo de interés*" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComments">
              <Form.Control as="textarea" rows={3} placeholder="Comentarios*" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {homepage.attributes.form.boton}
            </Button>
          </Form>
        </Col>
        <Col lg={12} className="form-container-disclaimer text-light">
          <span className="text-light">
            {homepage.attributes.form.descargo2}
          </span>
        </Col>
      </Row>
    </Col>
  )
}

export default FormComponent
