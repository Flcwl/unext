import { underline2camelcase, camelcase2underline } from '../lib/transform';

describe('string|object: transform methods', () => {
  describe('underline2camelcase', () => {
    it('camelcase method work with `string`', () => {
      expect(underline2camelcase('foo')).toEqual('foo');
      expect(underline2camelcase('--foo-bar')).toEqual('fooBar');
      expect(underline2camelcase('foo_bar')).toEqual('fooBar');
      expect(underline2camelcase('__foo__bar__')).toEqual('fooBar');
      expect(underline2camelcase('__foo__bar__')).toEqual('fooBar');
      expect(underline2camelcase('-')).toEqual('-');
      expect(underline2camelcase('--__--_--_')).toEqual('');
      expect(underline2camelcase('桑德_在这里。')).toEqual('桑德在这里。');
    });

    it('camelcase method work with `object`', () => {
      expect(underline2camelcase({foo:'foo'})).toEqual('foo');
      expect(underline2camelcase({'--foo-bar': '--foo-bar'})).toEqual('fooBar');
      expect(underline2camelcase({ 'foo_bar': 'foo_bar'})).toEqual('fooBar');
      expect(underline2camelcase({ '__foo__bar__': '__foo__bar__' })).toEqual('fooBar');
      expect(underline2camelcase({ '__foo__bar__': '__foo__bar__' })).toEqual('fooBar');
      expect(underline2camelcase({ '-': '-' })).toEqual('-');
      expect(underline2camelcase({ '--__--_--_': '--__--_--_'})).toEqual('');
      expect(underline2camelcase({ '桑德_在这里': '桑德_在这里'})).toEqual('桑德在这里');
    });
  });
});
