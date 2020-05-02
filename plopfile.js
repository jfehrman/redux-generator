const { loadSettings } = require('./scripts/utils/loadUtils')
const {
  useEmptyReducerGenerator,
} = require('./scripts/generators/empty-reducer')
const {
  useRequestReducerGenerator,
} = require('./scripts/generators/request-generator')

const settings = loadSettings()

module.exports = (plop) => {
  useEmptyReducerGenerator(plop, settings)
  useRequestReducerGenerator(plop, settings)
}

