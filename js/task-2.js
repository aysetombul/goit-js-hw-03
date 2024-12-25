function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray); // Combine the arrays
    return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray; // Trim if necessary
}
