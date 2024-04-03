const calculator = require('./calculator')

test(('Add      - Input  OK'), () => {
    expect(() => {calculator.add(30, "H")}).toThrow(TypeError);
})

test(('Add      - Output OK'), () => {
    expect(calculator.add(30, 20)).toBe(50);
})

test(('Subtract - Input  OK'), () => {
    expect(() => {calculator.subtract("H", 20)}).toThrow(TypeError);
})

test(('Subtract - Output OK'), () => {
    expect(calculator.subtract(30.3, 20)).toBe(10.3);
})

test(('Divide   - Input  OK'), () => {
    expect(() => {calculator.divide("H", "Y")}).toThrow(TypeError);
})

test(('Divide   - Output OK'), () => {
    expect(calculator.divide(50.5, 25.25)).toBe(2);
})

test(('Multiply - Input  OK'), () => {
    expect(() => {calculator.multiply(2, "Y")}).toThrow(TypeError);
})

test(('Multiply - Output OK'), () => {
    expect(calculator.multiply(25, 4)).toBe(100);
})