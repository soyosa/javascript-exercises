const add = function(a , b) {
	return a + b
};

const subtract = function(a , b) {
	return a - b
};

const sum = function(array) {
    return array.reduce(function(total, current) {
    return total + current;
  }, 0);
};

const multiply = function(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;

};

const power = function(base, power) {
	return math.pow(base , power)
};

const factorial = function(number) {
	 let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
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
