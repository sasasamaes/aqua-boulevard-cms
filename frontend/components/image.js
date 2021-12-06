import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style, className }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default Image
