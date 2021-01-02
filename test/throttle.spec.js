import throttle from '../lib/throttle';

describe('throttle', () => {
  it('should throttle a function', () => {
    let count = 0
    const initialCount = count;
    const throttled = throttle(() => { count++; }, 32);

    throttled();
    throttled();
    throttled();
    expect(count).toEqual(initialCount)

    setTimeout(() => {
      expect(count).toEqual(initialCount)
      expect(count > initialCount).toEqual(true)
    }, 64);
  });

  it('should trigger a second throttled call as soon as possible', () => {
    let count = 0;
    const throttled = throttle(() => {
      count++;
    }, 128);

    throttled();

    setTimeout(() => {
      expect(count).toEqual(1)
      throttled();
    }, 192);

    setTimeout(() => {
      expect(count).toEqual(1)
    }, 254);

    setTimeout(() => {
      expect(count).toEqual(2)
    }, 384);
  });

})
