import noop from '../lib/noop';

describe('noop', () => {
  it('noop work as default callback', () => {
    const fn = (callback = noop) => {
      return callback()
    }
    expect(fn()).toEqual(undefined)
  });
})
