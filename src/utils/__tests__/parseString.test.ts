import { parseString } from '../parseString';

describe('parseString', () => {
  test('should transform text', () => {
    expect(parseString('&quot;')).toEqual('"');
    expect(parseString('One &amp; two &amp; three')).toEqual(
      'One & two & three'
    );
    expect(parseString('&epsilon; =-N * (d&Phi;B)/(d)')).toEqual(
      'ε =-N * (dΦB)/(d)'
    );
  });
});
