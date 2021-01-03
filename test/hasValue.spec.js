import hasValue from '../lib/hasValue'

describe('hasValue', () => {
  it('should return `false` when value is `null`', () => {
    expect(hasValue(null)).toEqual(false)
  })

  it('should return `false` when value is `undefined`', () => {
    expect(hasValue(undefined)).toEqual(false)
  })

  it('should return `false` when value is `NaN`', () => {
    expect(hasValue(NaN)).toEqual(false)
  })

  it('should return `true` when value existed', () => {
    expect(hasValue('')).toEqual(true)
  })

  it('should return `true` when value is array', () => {
    expect(hasValue([])).toEqual(true)
  })
})
