function reverseString(string) {
    if (typeof string !== "string") throw new TypeError("Input type must be string");
    
    const split = string.split("");
    const reverse = split.reverse();
    return reverse.join("");
}

module.exports = reverseString;