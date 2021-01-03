import { isNode, isBrowser } from '../lib/env';
window = undefined
describe('env', () => {
  it('isNode didn\'t work', () => {
    expect(isNode).toEqual(true);
  });

  it('isBrowser didn\'t work', () => {
    expect(isBrowser).toEqual(true); // fork window
  });
});
