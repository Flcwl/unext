import mergeDeep from '../lib/mergeDeep'

describe('mergeDeep', () => {
  it('mergeDeep work with object', () => {
    const hh = { hh: { gg: 33 } }
    const s = { a: [2, hh], b: 2, c: { e: 2 }, f: { g: 2 } }
    const t = { a: [hh, 4], c: { d: 1 } }

    const expected = { a: [2, { hh: { gg: 33 } }], c: { d: 1, e: 2 }, b: 2, f: { g: 2 } }
    expect(mergeDeep(t, s)).toEqual(expected)
  })
})
