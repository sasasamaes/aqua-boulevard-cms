import React from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import NextImage from "./image"

const FormComponent = ({ homepage, lg }) => {
  const styleImg = {
    width: 30,
    height: 30,
  }
  return (
    <Col lg={lg} className="form-container bg-dark p-4">
      <Row>
        <Col lg={12}>
          <NextImage image={homepage.attributes.form.logo} style={styleImg} />
        </Col>
        <Col className="text-light">
          <p>{homepage.attributes.form.direccion}</p>
          <h2>{`Desde ${homepage.attributes.form.precio}`}</h2>
          <p>{homepage.attributes.form.descargo}</p>
        </Col>
      </Row>

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
        <p className="text-light">{homepage.attributes.form.descargo2}</p>
      </Form>
    </Col>
  )
}

export default FormComponent
