function groupArrayElements(inputArray, numberOfSubArrays) {
	if (
		typeof numberOfSubArrays !== "number" ||
		numberOfSubArrays < 1 ||
		inputArray.length < numberOfSubArrays
	) {
		throw new Error("Invalid input parameters given");
	}

	const result = [];

	// Resulting array is built in 2 steps
	// 1. Append equally sized arrays leaving the last one
	// 2. Append rest of the elements as the final array

	// Determine the maximum size for each equally sized array
	let subArraySize = Math.floor(inputArray.length / numberOfSubArrays);
    
	// Check if it is possible to add one more element to each equally sized array
	if (inputArray.length % numberOfSubArrays === numberOfSubArrays - 1) {
		subArraySize += 1;
	}
	// Extract and append each equally sized array to the resulting array
	for (let i = 0, j = 0; i < numberOfSubArrays - 1; i++) {
		result.push(inputArray.slice(j, j + subArraySize));
		j += subArraySize;
	}
	// Append the final array
	result.push(
		inputArray.slice(
			subArraySize * (numberOfSubArrays - 1),
			inputArray.length
		)
	);
	return result;
}

module.exports = groupArrayElements;
