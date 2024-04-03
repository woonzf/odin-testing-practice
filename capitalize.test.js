const capitalize = require('./capitalize')

test('Input  - Type OK', () => {
    // To test for error, the function cannot be invoked directly
    expect(() => capitalize(30)).toThrow(TypeError);
})

test('Output - Single word OK', () => {
    expect(capitalize("testing")).toBe("Testing");
})

test('Output - Multiple words OK', () => {
    expect(capitalize("testing testing")).toBe("Testing testing");
})

test('Output - First word is digit OK', () => {
    expect(capitalize("123")).toBe("123");
})