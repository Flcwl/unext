import isNumeric from '../lib/isNumeric'

describe('isNumeric', () => {
  it('isNumeric method work with number', () => {
    expect(isNumeric(12)).toEqual(true)
  })

  it('isNumeric method work with string', () => {
    expect(isNumeric('12')).toEqual(true)
  })

  it(`isNumeric method did't work with letter`, () => {
    expect(isNumeric('1a')).toEqual(false)
  })
})
