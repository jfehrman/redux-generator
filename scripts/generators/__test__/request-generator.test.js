
const {
  useEmptyReducerGenerator,
} = require('../empty-reducer')
const {
  generateRequestReducerActions,
} = require('../request-generator')

describe('generateRequestReducerActions', () => {
  it('isSemicolons', () => {
    const results = generateRequestReducerActions({ isSemicolons: true, jsExt: 'js' })
    expect(results.length).toBe(4)
  })

  it('Not isSemicolons', () => {
    const results = generateRequestReducerActions({ isSemicolons: false, jsExt: 'js' })
    expect(results.length).toBe(8)
  })
})

const plop = {
  setGenerator: jest.fn(),
}

it('useRequestReducerGenerator', () => {
  useEmptyReducerGenerator(plop, {})
  expect(plop.setGenerator).toBeCalled()
})

