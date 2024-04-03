function caesarCipher(string, key) {
    if (arguments.length !== 2) throw new Error("2 arguments required");
    if (!isNaN(string)) throw new TypeError("First input must be a string");
    if (isNaN(key)) throw new TypeError("Second input must be a number");
    
    let arr = [];

    for (let i = 0; i < string.length; i++) {
        arr.push(rotate(string[i], key));
    }

    return arr.join("");
}

function rotate(char, key) {
    let temp = null;

    if (!isLetter(char)) return char;

    if (char === char.toUpperCase()) {
        const code = "A".charCodeAt();
        temp = char.charCodeAt() - code;
        return String.fromCharCode((temp + key) % 26 + code);
    }

    if (char === char.toLowerCase()) {
        const code = "a".charCodeAt();
        temp = char.charCodeAt() - code;
        return String.fromCharCode((temp + key) % 26 + code);
    }
}

function isLetter(str) {
    return /[A-Za-z]/.test(str);
}

module.exports = caesarCipher;