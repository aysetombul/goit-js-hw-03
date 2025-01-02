function filterArray(numbers, value) {
    const filteredNumbers = []; // Initialize an empty array to store matching numbers

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) { // Check if the current number is greater than the value
            filteredNumbers.push(numbers[i]); // Add it to the filtered array
        }
    }

    return filteredNumbers; // Return the filtered array
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
