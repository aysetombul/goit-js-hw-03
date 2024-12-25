function filterArray(numbers, value) {
    const filteredNumbers = []; // Initialize an empty array to store matching numbers

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) { // Check if the current number is greater than the value
            filteredNumbers.push(numbers[i]); // Add it to the filtered array
        }
    }

    return filteredNumbers; // Return the filtered array
}