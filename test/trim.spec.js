import trim from '../lib/trim'

describe('trim', () => {
  it('trim blank character on both sides', () => {
    expect(trim('  Flcwl  ')).toEqual('Flcwl')
  })

  it('trim blank character on left side', () => {
    expect(trim('  Flcwl  ', ' ', 'left')).toEqual('Flcwl  ')
  })

  it('trim blank character on right side', () => {
    expect(trim('  Flcwl  ', ' ', 'right')).toEqual('  Flcwl')
  })

  it('trim special character on both sides', () => {
    expect(trim('__Flcwl__', '_')).toEqual('Flcwl')
  })

  it('trim special character on left side', () => {
    expect(trim('__Flcwl__', '_', 'left')).toEqual('Flcwl__')
  })

  it('trim special character on right side', () => {
    expect(trim('__Flcwl__', '_', 'right')).toEqual('__Flcwl')
  })
})
