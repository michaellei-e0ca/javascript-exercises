const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return 'OOPS';
    }
    if (num == 1) {
        return 1;
    }
    let a = 1, b = 0, temp;
    while (num > 1) {
        temp = a + b; 
        b = a; 
        a = temp 
        num--;
    }
    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
