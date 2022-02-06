const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    str = str.split(' ').join('');

    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    
    if (str == reverseStr) {
        return true;
    }
    
    return false;
}

// Do not edit below this line
module.exports = palindromes;
