import { genIUid } from '~/util/uid'
import { normalizeHabitat } from '~/service/normalize'

export const updateHabitat = habitat => ({
  type: 'mutation:habitat:update',
  habitat: normalizeHabitat(habitat),
})

export const createHabitat = (siteId, habitat) => ({
  type: 'mutation:habitat:create',
  siteId,
  habitat: {
    id: genIUid(),
    info: {},
    population: [],
    ...habitat,
  },
})

export const createSite = site => ({
  type: 'mutation:site:create',
  site: {
    id: genIUid(),
    ...site,
    habitats: [],
  },
})
