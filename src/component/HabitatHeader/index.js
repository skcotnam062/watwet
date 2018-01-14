import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { Image } from '~/component/Image'

export const HabitatHeader = ({ habitat }) => (
  <Container>
    <BackgroundW>
      <Background
        url={habitat && habitat.info.picture_url}
        preImage="linear-gradient( 0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.01) 40% ),"
      />
    </BackgroundW>
    <Picture url={habitat && habitat.info.picture_url} />
  </Container>
)

const BackgroundW = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const Background = styled(Image)`
  width: 100%;
  height: 100%;
  filter: blur(16px) contrast(0.9) brightness(1.3);
  transform: scale(1.3, 1.3);
`

const Picture = styled(Image)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: solid 4px #fff;
  position: relative;
`

const Container = styled.div`
  height: 300px;
  position: relative;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
