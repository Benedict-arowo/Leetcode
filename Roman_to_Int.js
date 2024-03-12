/**
 * @param {string} s
 * @return {number}
 */

const values = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const combinations = [
	{
		main: "I",
		subs: ["V", "X"],
	},
	{ main: "C", subs: ["D", "M"] },
	{ main: "X", subs: ["L", "C"] },
];

var romanToInt = function (s) {
	let output = 0;
	const valArray = s.split("");

	for (let i = 0; i < valArray.length; i++) {
		const val = valArray[i];
		const nextVal = valArray[i + 1];

		let possibleCombinations = combinations.find(
			(item) => item.main === val
		);

		/* 
            If a combination exists, it checks if it matches the subs value so, if there's a combination, and the current value is I it checks if the next value matches with the expected values on the combinations array, and if it does, it subtracts the bigger value from the smaller value.
        
            And if there's no combination, it just adds the value to the output.
        */

		if (
			possibleCombinations &&
			possibleCombinations.subs.includes(valArray[i + 1])
		) {
			output += getValue(val, nextVal);
			i++;
		} else {
			output += getValue([valArray[i]]);
		}
	}

	return output;
};

/**
 * Retrieves the value from the values object.
 * If there's no second value, it just returns the value of the first value.
 * If there is a second value, it subtracts the second value from the first and returns the result.
 * @param {string} first - The first value.
 * @param {string} [second] - The optional second value. If not provided, the function returns the value of the first.
 * @returns {number} The result of the subtraction (if second is provided) or the value of the first (if second is not provided).
 */

const getValue = (first, second) => {
	if (!second) return values[first];
	return values[second] - values[first];
};

romanToInt("IX");
