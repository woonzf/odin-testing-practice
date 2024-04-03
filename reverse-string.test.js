const reverseString = require('./reverse-string');

test('Input  - Type OK', () => {
    // To test for error, the function cannot be invoked directly
    expect(() => reverseString(30)).toThrow(TypeError);
})

test('Output - Single word OK', () => {
    expect(reverseString("abc")).toBe("cba");
})

test('Output - Multiple words OK', () => {
    expect(reverseString("abc abc")).toBe("cba cba");
})

test('Output - First word is digit OK', () => {
    expect(reverseString("123")).toBe("321");
})