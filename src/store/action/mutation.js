import { genUid } from '~/util/uid'

export const updateHabitat = habitat => ({
  type: 'mutation:habitat:update',
  habitat,
})

export const createHabitat = (siteId, habitat) => ({
  type: 'mutation:habitat:create',
  siteId,
  habitat: {
    id: genUid(),
    info: {},
    population: [],
    layers: { A: 0, a: 0, h: 0 },
    ...habitat,
  },
})
