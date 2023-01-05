/*
const removeFromArray = function (...array) {
	const itemsToRemove = array.slice(1);
	const numArray = array[0];

    for (let i = 0; i < itemsToRemove.length; i++)
        { for (let j = 0; j < numArray.length; j++) {
            if (numArray[j] === itemsToRemove[i] ) {
                numArray.splice(j, 1);
            }
        }
    }
	return numArray;
};
*/

const removeFromArray = function (...array) {
	const numArray = array[0];
	return numArray.filter((items) => !array.includes(items));
};

// Do not edit below this line
module.exports = removeFromArray;
