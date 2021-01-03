import { toCamelcase, toUnderline } from '../lib/transform';

describe('string|object: transform methods', () => {
  describe('toCamelcase', () => {
    it('toCamelcase method work with `string`', () => {
      expect(toCamelcase('foo')).toEqual('foo');
      expect(toCamelcase('--foo-bar')).toEqual('--foo-bar');
      expect(toCamelcase('foo_bar')).toEqual('fooBar');
      expect(toCamelcase('__foo__bar__')).toEqual('fooBar');
      expect(toCamelcase('-')).toEqual('-');
      expect(toCamelcase('--__--_--_')).toEqual('------');
      expect(toCamelcase('桑德_在这里。')).toEqual('桑德在这里。');
    });

    it('toCamelcase method work with `object`', () => {
      expect(toCamelcase({foo: 'foo'})).toEqual({foo: 'foo'});
      expect(toCamelcase({'--foo-bar': '--foo-bar'})).toEqual({'--foo-bar': '--foo-bar'});
      expect(toCamelcase({ 'foo_bar': 'foo_bar'})).toEqual({ 'fooBar': 'foo_bar'});
      expect(toCamelcase({ '__foo__bar__': '__foo__bar__' })).toEqual({ 'fooBar': '__foo__bar__' });
      expect(toCamelcase({ '-': '-' })).toEqual({ '-': '-' });
      expect(toCamelcase({ '--__--_--_': '--__--_--_'})).toEqual({ '------': '--__--_--_'});
      expect(toCamelcase({ '桑德_在这里': '桑德_在这里'})).toEqual({ '桑德在这里': '桑德_在这里'});
    });
  });

  describe('toUnderline', () => {
    it('toUnderline method work with `string`', () => {
      expect(toUnderline('foo')).toEqual('foo');
      expect(toUnderline('fooBar')).toEqual('foo_bar');
      expect(toUnderline('fooBarDee')).toEqual('foo_bar_dee');
      expect(toUnderline('__foo__bar__')).toEqual('__foo__bar__');
      expect(toUnderline('-')).toEqual('-');
      expect(toUnderline('--__--_--_')).toEqual('--__--_--_');
      expect(toUnderline('桑德_在这里。')).toEqual('桑德_在这里。');
    });

    it('toUnderline method work with `object`', () => {
      expect(toUnderline({foo: 'foo'})).toEqual({foo: 'foo'});
      expect(toUnderline({'--foo_bar': '--foo-bar'})).toEqual({'--foo_bar': '--foo-bar'});
      expect(toUnderline({ 'fooBar': 'foo_bar'})).toEqual({ 'foo_bar': 'foo_bar'});
      expect(toUnderline({ '__foo__bar__': '__foo__bar__' })).toEqual({ '__foo__bar__': '__foo__bar__' });
      expect(toUnderline({ '-': '-' })).toEqual({ '-': '-' });
      expect(toUnderline({ '--__--_--_': '--__--_--_'})).toEqual({ '--__--_--_': '--__--_--_'});
      expect(toUnderline({ '桑德_在这里': '桑德_在这里'})).toEqual({ '桑德_在这里': '桑德_在这里'});
    });
  });
});
