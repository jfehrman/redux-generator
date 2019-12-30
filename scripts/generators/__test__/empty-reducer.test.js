const {
  generateEmptyReducerActions,
  useEmptyReducerGenerator,
} = require('../empty-reducer')

describe('generateEmptyReducerActions', () => {
  it('isSemicolons', () => {
    const results = generateEmptyReducerActions({ isSemicolons: true, jsExt: 'js' })
    expect(results.length).toBe(3)
  })

  it('Not isSemicolons', () => {
    const results = generateEmptyReducerActions({ isSemicolons: false, jsExt: 'js' })
    expect(results.length).toBe(4)
  })
})

const plop = {
  setGenerator: jest.fn(),
}

it('useEmptyReducerGenerator', () => {
  useEmptyReducerGenerator(plop, {})
  expect(plop.setGenerator).toBeCalled()
})

