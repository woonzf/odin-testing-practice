function analyzeArray(arr) {
    checkInput(arr);

    return {
        average: getAverage(arr),
        min: Math.min(... arr),
        max: Math.max(... arr),
        length: arr.length
    }
}

function checkInput(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Input must be an array");

    arr.forEach(el => {
        if (isNaN(el)) throw new TypeError("Array must contain only numbers");
    });
}

function getAverage(arr) {
    const total = arr.reduce((total, n) => total + n, 0);
    const average = total / arr.length;
    return parseFloat(average.toFixed(3));
}

module.exports = analyzeArray;