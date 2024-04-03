const calculator = (() => {
    function add(a, b) {
        const input = [_checkInput(a), _checkInput(b)];
        return input.reduce((total, n) => total + n, 0);
    }

    function subtract(a, b) {
        const input = [_checkInput(a), _checkInput(b)];
        return input[0] - input[1];
    }

    function divide(a, b) {
        const input = [_checkInput(a), _checkInput(b)];
        return input[0] / input[1];
    }

    function multiply(a ,b) {
        const input = [_checkInput(a), _checkInput(b)];
        return input[0] * input[1];
    }

    function _checkInput(n) {
        if (isNaN(n)) throw new TypeError("Input is not a number")
        return n;
    }

    return { add, subtract, divide, multiply }
})()

module.exports = calculator;