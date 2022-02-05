const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) { 
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  return arr.reduce(reducer, 0);
};

const multiply = function(arr) {

	const reducer = (previousValue, currentValue) => previousValue * currentValue;

  return arr.reduce(reducer);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(arrLength) {
  let arr = [1];

	for (let i = 0; i < arrLength; i++) {
    arr[i] = i + 1;
  }

  const reducer = (previousValue, currentValue) => previousValue * currentValue;

  return arr.reduce(reducer);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
