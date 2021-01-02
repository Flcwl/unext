import debounce from '../lib/debounce';

describe('debounce', () => {
  it('should debounce with fast timeout', function() {
    let count = 0
    const debounced = debounce(() => {
      count++
    }, 100)

    setTimeout(debounced, 100)
    setTimeout(debounced, 150)
    setTimeout(debounced, 200)
    setTimeout(debounced, 250)

    setTimeout(() => {
    expect(count).toEqual(1)
    }, 350);
  })
});
