import hasOwnProp from '../lib/hasOwnProp'

describe('hasOwnProp', () => {
  it('return `true` when has props in an object', () => {
    const obj = { a: 1 }
    expect(hasOwnProp(obj, 'a')).toEqual(true)
    expect(hasOwnProp(obj, 'c')).toEqual(false)
  })
})
