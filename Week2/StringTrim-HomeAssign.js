function lengthOfLastWord() {

    // 1. Trim the string
    let trimmedString = string.trim();

    // 2. Split the string into words
    let words = trimmedString.split(" ");  // ["fly", "me", "", "", "to", "", "", "the", "moon"]

    let lastWord = words[words.length - 1]; //words[8] ==> "moon"

    let length = lastWord.length;

    return length;
}

let string = "   fly me   to   the moon  ";

console.log(lengthOfLastWord());