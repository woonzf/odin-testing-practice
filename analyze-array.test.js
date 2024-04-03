const analyzeArray = require('./analyze-array')

test('Input  - Type OK', () => {
    expect(() => {analyzeArray([12, "fsafas"])}).toThrow(TypeError);
})

test('Output - Integer OK', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
        .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
})

test('Output - Decimal OK', () => {
    expect(analyzeArray([1,8.5,-3,4,2,6]))
        .toEqual({
            average: 3.083,
            min: -3,
            max: 8.5,
            length: 6
        });
})