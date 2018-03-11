import { h } from 'preact'
import styled from 'preact-emotion'
import {
  paths as paths_pineTree,
  box as box_pineTree,
} from '~/component/Icon/PineTree'
import { paths as paths_bush, box as box_bush } from '~/component/Icon/Bush'
import { paths as paths_herb, box as box_herb } from '~/component/Icon/Herb'
import { variant, trio, white } from '~/component/_abstract/palette'
import { selectCurrentLayer } from '~/store/selector/currentLayer'
import { connect } from 'preact-redux'

const buildPattern = (l, s) => (paths, box, color) => {
  const [x, y, width, height] = box

  const k = Math.min(l * s / width, l * s / height)

  return (
    <pattern
      id="wallpaper-pattern"
      patternUnits="userSpaceOnUse"
      x={box[0]}
      y={box[1]}
      width={l}
      height={l}
    >
      <g transform={`scale(${k},${k})`}>
        {paths.map((d, i) => <path key={i} d={d} fill={color} />)}
      </g>
    </pattern>
  )
}

const getColor = state => {
  switch (state.router.key) {
    case 'habitat':
      switch (selectCurrentLayer(state)) {
        case 'h':
          return {
            color: trio[0],
            pattern: buildPattern(50, 0.5)(paths_herb, box_herb, trio[0]),
          }
        case 'a':
          return {
            color: trio[1],
            pattern: buildPattern(50, 0.3)(paths_bush, box_bush, trio[1]),
          }
        case 'A':
          return {
            color: trio[2],
            pattern: buildPattern(50, 0.4)(
              paths_pineTree,
              box_pineTree,
              trio[2]
            ),
          }
        default:
          return {
            color: trio[2],
          }
      }

    case 'home':
    case 'habitatList':
      return {
        color: variant[0],
      }

    case 'habitatCreate':
      return {
        color: variant[3],
      }

    default:
      return {
        color: variant[1],
      }
  }
}

export const Wallpaper_ = ({ color, pattern }) => (
  <Container>
    <rect
      x={0}
      width={9999}
      y={0}
      height={9999}
      fill={color}
      style={{ opacity: 0.95, transition: 'fill 260ms ease' }}
    />
    {pattern && (
      <rect
        x={0}
        width={9999}
        y={0}
        height={9999}
        fill="url(#wallpaper-pattern)"
      />
    )}
    <defs>{pattern}</defs>
  </Container>
)

const back_color = {
  home: variant[0],
  habitatCreate: variant[3],
  habitatList: variant[0],
  habitat: variant[1],
}

const Container = styled.svg`
  background-color: ${props => back_color[props.routerKey]};
  transition: background-color 280ms ease;
  position: absolute;
  opacity: 0.88;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

export const Wallpaper = connect(getColor)(Wallpaper_)
