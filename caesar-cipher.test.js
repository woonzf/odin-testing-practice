const caesarCipher = require('./caesar-cipher')

test('Input  - OK', () => {
    expect(() => {caesarCipher(13, 3)}).toThrow(TypeError);
})

test('Output - Wrap OK', () => {
    expect(caesarCipher("z", 1)).toBe("a");
})

test('Output - Case OK', () => {
    expect(caesarCipher("Aa", 2)).toBe("Cc");
})

test('Output - Punctuation OK', () => {
    expect(caesarCipher("abc, abc", 2)).toBe("cde, cde");
})