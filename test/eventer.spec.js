import Eventer from '../lib/eventer';

describe('Eventer', () => {
  it('Eventer trigger', () => {
    const event = new Eventer()
    let count = 0
    event.on('test', () => {
      count++
    })

    event.trigger('test')
    expect(count).toEqual(1);

    event.off('test')
    event.trigger('test')
    expect(count).toEqual(1);
  });
})
