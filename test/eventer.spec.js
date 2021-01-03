import Eventer from '../lib/eventer';

describe('Eventer', () => {
  it('Eventer trigger', () => {
    const event = new Eventer()
    const callback = () => {
      count++
    }
    let count = 0
    event.on('test', callback)

    event.trigger('test')
    expect(count).toEqual(1);

    event.off('test', callback)
    event.trigger('test')
    expect(count).toEqual(1);
  });

  it('Eventer off all', () => {
    const event = new Eventer()
    const callback = () => {
      count++
    }
    let count = 0
    event.on('test', callback)

    event.trigger('test')
    expect(count).toEqual(1);

    event.off('test')
    event.trigger('test')
    expect(count).toEqual(1);
  });
})
