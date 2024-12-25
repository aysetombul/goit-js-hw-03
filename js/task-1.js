function slugify(title) {
    return title
        .trim() // Remove any leading or trailing whitespace
        .toLowerCase() // Convert all characters to lowercase
        .split(" ") // Split the string into words by spaces
        .join("-"); // Join the words with a dash
}