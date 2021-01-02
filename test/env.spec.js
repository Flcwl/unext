import { isNode, isBrowser } from '../lib/env';

describe('env', () => {
  it('isNode didn\'t work', () => {
    expect(isNode).toEqual(true);
  });

  it('isBrowser didn\'t work', () => {
    expect(isBrowser).toEqual(false);
  });
});
