import { duration } from '../lib'
// const { duration } = require('../lib')

// $N means Nth parameter
describe('Time duration to format', () => {
  describe('milliseconds', () => {
    it('Using default when $1 = 333333', () => {
      const formattedDurationTime = duration(333333).format()
      expect(formattedDurationTime).toEqual('00:05:33-333')
    })

    it('HH:mm:ss when $1 = 999', () => {
      const formattedDurationTime = duration(999, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:00')
    })

    it('HH:mm:ss when $1 = 1000', () => {
      const formattedDurationTime = duration(1000, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:01')
    })

    it('HH:mm:ss when $1 = 222222', () => {
      const formattedDurationTime = duration(222222, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:03:42')
    })

    it('HH:mm:ss when $1 = 2222', () => {
      const formattedDurationTime = duration(2222, 'milliseconds').format('HH:mm:ss:SSS')
      expect(formattedDurationTime).toEqual('00:00:02:222')
    })

    it('HH:mm:ss when $1 = 273222222', () => {
      const formattedDurationTime = duration(273222222, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('75:53:42')
    })

    it('HH,mm[[H]]ss when $1 = 12732222', () => {
      const formattedDurationTime = duration(12732222, 'milliseconds').format('HH,mm[[H]]ss')
      expect(formattedDurationTime).toEqual('03,32[H]12')
    })

    it('HH:mm:ss when $1 = -1000', () => {
      const formattedDurationTime = duration(-1000, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:00')
    })

    it('HH:mm:ss when $1 = -12732222', () => {
      const formattedDurationTime = duration(-12732222, 'milliseconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:00')
    })

    it('HH:mm:ss when $1 = 36610000333', () => {
      const formattedDurationTime = duration(36610000333, 'milliseconds').format('Y:MM:DD:HH:mm:ss:SSS')
      expect(formattedDurationTime).toEqual('1:01:28:17:26:40:333')
    })
  })

  describe('seconds', () => {
    it('Using default when $1 = 333', () => {
      const formattedDurationTime = duration(333, 'seconds').format()
      expect(formattedDurationTime).toEqual('00:05:33-000')
    })

    it('HH:mm:ss when $1 = 738000', () => {
      const formattedDurationTime = duration(738000, 'seconds').format('H:mm')
      expect(formattedDurationTime).toEqual('205:00')
    })

    it('HH:mm:ss when $1 = 1', () => {
      const formattedDurationTime = duration(1, 'seconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:01')
    })

    it('HH:mm:ss when $1 = 1000', () => {
      const formattedDurationTime = duration(1000, 'seconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:16:40')
    })

    it('HH:mm:ss when $1 = 7380', () => {
      const formattedDurationTime = duration(7380, 'seconds').format('H:mm')
      expect(formattedDurationTime).toEqual('2:03')
    })

    it('HH:mm:ss when $1 = -1', () => {
      const formattedDurationTime = duration(-1, 'seconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:00')
    })

    it('HH:mm:ss when $1 = -12732222', () => {
      const formattedDurationTime = duration(-12732222, 'seconds').format('HH:mm:ss')
      expect(formattedDurationTime).toEqual('00:00:00')
    })

    it('HH:mm:ss when $1 = 3661', () => {
      const formattedDurationTime = duration(3661, 'seconds').format('H [[Hrs]], m [[mins] countdown]')
      expect(formattedDurationTime).toEqual('1 [Hrs], 1 [mins countdown]')
    })

    it('HH:mm:ss when $1 = 36610000', () => {
      const formattedDurationTime = duration(36610000, 'seconds').format('Y:MM:DD:HH:mm:ss:SSS')
      expect(formattedDurationTime).toEqual('1:01:28:17:26:40:000')
    })
  })
})
