const sumAll = function (int1, int2) {
	let finalSum = 0;
	let firstNumber;
	let secondNumber;

	if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
		return 'ERROR';
	} 
    if (int1 > int2) {
		firstNumber = int2;
		secondNumber = int1;
	} else {
		firstNumber = int1;
		secondNumber = int2;
	}
	for (let i = firstNumber; i < secondNumber + 1; i++) {
		finalSum += i;
	}
	return finalSum;
};

/*
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;

sumAll(4, "1");
