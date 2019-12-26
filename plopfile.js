const { loadSettings } = require('./scripts/utils/loadUtils')
const {
  useEmptyReducerGenerator,
} = require('./scripts/generators/empty-reducer')

const settings = loadSettings()

module.exports = (plop) => {
  useEmptyReducerGenerator(plop, settings)
}

