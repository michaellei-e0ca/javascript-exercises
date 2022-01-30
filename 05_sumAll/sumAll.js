const sumAll = function(start, end) {
    let numbers = [];
    if (start < 0 || end < 0) {
        return "ERROR";
    } else if (typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR";
    }
    if (start > end) {
        swap = start;
        start = end;
        end = swap;
    }
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return numbers.reduce(reducer);
};

// Do not edit below this line
module.exports = sumAll;
