import React from "react"
import { Carousel, Col } from "react-bootstrap"
import NextImage from "./image"

const HomeSlider = ({ homeSlider, lg }) => {
  return (
    <Col lg={lg} className="slider-container text-light">
      <Carousel>
        {homeSlider?.map((slide, index) => (
          <Carousel.Item key={`slide-${index}`}>
            <NextImage image={slide.attributes.Fondo} />
            <Carousel.Caption>
              <p>{slide.attributes.Texto}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  )
}

export default HomeSlider
