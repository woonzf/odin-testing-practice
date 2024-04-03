function capitalize(string) {
    if (typeof string !== "string") throw new TypeError("Input type must be string");
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;