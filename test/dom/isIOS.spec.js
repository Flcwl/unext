import isIOS from '../../lib/dom/isIOS'

describe('Test isIOS module', () => {
  const _window = {
    navigator: {
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    },
  }

  it('Test isIOS by navigator', () => {
    const expectedResult = isIOS(_window)
    expect(expectedResult).toEqual(true)
  })
})
