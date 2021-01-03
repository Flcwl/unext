import debounce from '../lib/debounce';

describe('debounce', () => {
  it('should debounce with less than timeout', () => {
    let count = 0
    const debounced = debounce(() => {
      count++
    }, 100)
    expect(count).toEqual(0)
    setTimeout(debounced, 100)
    setTimeout(debounced, 200)
    setTimeout(debounced, 300)
    setTimeout(debounced, 400)

    setTimeout(() => {
      expect(count).toEqual(0)
    }, 50);
    setTimeout(() => {
      expect(count).toEqual(0)
    }, 150);
    setTimeout(() => {
      expect(count).toEqual(0)
    }, 250);
    setTimeout(() => {
      expect(count).toEqual(0)
    }, 350);
  })

  it('should debounce with fast timeout', () => {
    let count = 0
    const debounced = debounce(() => {
      count++
    }, 100)
    setTimeout(debounced, 100)
    setTimeout(debounced, 150)
    setTimeout(debounced, 200)
    setTimeout(debounced, 250)
    expect(count).toEqual(0)
    setTimeout(() => {
    expect(count).toEqual(1)
    }, 350);
  })
});
