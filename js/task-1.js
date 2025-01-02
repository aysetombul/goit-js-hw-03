function slugify(title) {
    return title
        .trim() // Remove any leading or trailing whitespace
        .toLowerCase() // Convert all characters to lowercase
        .split(" ") // Split the string into words by spaces
        .join("-"); // Join the words with a dash
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
