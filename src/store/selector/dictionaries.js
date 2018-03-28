import { createSelector } from 'reselect'
import { normalize } from '~/util/textSearch'

const formatIndex = code => {
  const [a, ...b] = code.toString().split('.')

  return [
    '0'.repeat(5 - a.length) + a,
    ...Array.from({ length: 1 }).map((_, i) => {
      const u = b[i] || ''

      return u + '0'.repeat(5 - u.length)
    }),
  ].join('')
}

const formatCodeCorineBiotipe = code => code

export const selectHabitatDictionary = createSelector(
  state => state.resource.original.habitatDictionary,
  habitatDictionary =>
    (habitatDictionary || [])
      .map(x => ({
        ...x,
        id: formatIndex(x.codeCorineBiotipe),
        codeCorineBiotipe: formatCodeCorineBiotipe(x.codeCorineBiotipe),
        name: x.canonicalName,
        normalizedName: normalize(x.canonicalName),
      }))
      .sort((a, b) => (a.id < b.id ? -1 : 1))
)

export const selectVegetalDictionary = state =>
  state.resource.original.vegetalDictionary

export const selectVegetal_byId = createSelector(
  selectVegetalDictionary,
  (arr = []) => {
    const byId = {}
    arr.forEach(x => (byId[x.id] = x))
    return byId
  }
)

export const selectDitionariesReady = createSelector(
  selectVegetalDictionary,
  selectHabitatDictionary,
  (a, b) => !!(a && a.length && b && b.length)
)
