// Initial array
let data = [3,4,'d',"Java",null,'e','Playwright','6'];
console.log("Initial Array:", data);

// 1. push() - add element at the end
data.push("orange");
console.log("After push():", data);

// 2. pop() - remove last element
data.pop();
console.log("After pop():", data);

// 3. shift() - remove first element
data.shift();
console.log("After shift():", data);

// 4. unshift() - add element at beginning
data.unshift("grapes");
console.log("After unshift():", data);

// 5. includes() - check element exists
console.log("Includes 'apple'?", data.includes("apple"));

// 5. includes() - check element exists
console.log("Includes 'Playwright'?", data.includes("Playwright"));

// 6. indexOf() - find position of element
console.log("Index of 'grapes':", data.indexOf("grapes"));

// 7. join() - convert array to string
let dataString = data.join(", ");
console.log("Joined String:", dataString);

// 8. reverse() - reverse the array
let reversedArray = data.reverse();
console.log("Reversed Array:", reversedArray);

// 9. sort() - sort the array
let sortedArray = data.sort();
console.log("Sorted Array:", sortedArray);