import { h } from 'preact'
import styled from 'preact-emotion'
import { createTransform } from '~/service/cloudinary'

const transform = createTransform()

export const Image = ({ src, style, ...props }) => (
  <Image_
    {...props}
    style={{
      backgroundImage: [
        props.preImage,
        `url(${transform(src)})`,
        props.postImage,
      ]
        .filter(Boolean)
        .join(' '),

      ...(style || {}),
    }}
  />
)

const Image_ = styled.div`
  background-color: #aaa;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
