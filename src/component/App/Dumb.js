import { h, Component } from 'preact'
import styled from 'preact-emotion'

import { RepartitionBar } from '~/component/RepartitionBar'
import { Header } from '~/component/Header'
import { Footer } from '~/component/Footer'
import { Wallpaper } from '~/component/Wallpaper'
import { CreateHabitat } from '~/component/_page/CreateHabitat'
import { HabitatList } from '~/component/_page/HabitatList'
import { Habitat } from '~/component/_page/Habitat'
import { Login } from '~/component/_page/Login'
import { variant } from '~/component/_abstract/palette'
import cssReset from '../_abstract/cssReset'

export const Content = ({ anonym, routerKey, routerParam }) => {
  if (anonym) return <Login />

  switch (routerKey) {
    case 'habitatCreate':
      return <CreateHabitat />

    case 'habitatList':
      return <HabitatList />

    case 'habitat':
      return <Habitat />

    default:
      return null
  }
}

export const App = props =>
  cssReset() || (
    <Container>
      <Header />
      <ContentWrap>
        <Wallpaper />
        <Content {...props} />
      </ContentWrap>
      <Footer />
    </Container>
  )

const ContentWrap = styled.div`
  flex: 0px 1 1;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
