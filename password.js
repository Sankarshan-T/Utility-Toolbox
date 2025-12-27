const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:",.<>?';  

function getRandomChar(chars) {
    const crypto = window.crypto || window.msCrypto; // For IE 11
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return chars[array[0] % chars.length];
}

function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = '';
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    const typesCount = typesArr.length;

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            if (funcName === 'upper') {
                generatedPassword += getRandomChar(uppercaseChars);
            } else if (funcName === 'lower') {
                generatedPassword += getRandomChar(lowercaseChars);
            } else if (funcName === 'number') {
                generatedPassword += getRandomChar(numberChars);
            } else if (funcName === 'symbol') {
                generatedPassword += getRandomChar(symbolChars);
            }
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    passwordEl.value = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});

copyEl.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordEl.value);
    copyEl.textContent = "Copied!";
    setTimeout(() => {
        copyEl.textContent = "Copy";
    }, 1200);
});