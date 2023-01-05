/*
const leapYears = function (year) {
	let leapYear;
	if (year % 4 === 0 && year % 100 !== 0 ) {
		leapYear = true;
	} else if (year % 100 === 0 && year % 400 === 0) {
		leapYear = true;
	} else {
		leapYear = false;
	}
	return leapYear;
};
*/ 
const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};


leapYears(1900)
leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
