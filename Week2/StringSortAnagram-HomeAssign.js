function isAnagram(str1, str2) {

    // 1. Remove spaces and convert to lowercase
    let string1 = str1.replace(/\s/g, "").toLowerCase();
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    // 2. Sort the characters
    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    // 3. Compare sorted strings
    if(sortedString1 === sortedString2) {
        console.log("True")
    } else {
        console.log("False")
    }

}
isAnagram('listen', 'silent');
isAnagram('hello', 'world');