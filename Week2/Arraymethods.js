let data = ["chrome", true, 132.8];

console.log("Initial array:", data);

data[5] = "webkit";
console.log("After adding at index 5:", data); // add index 5 -> WebKit

data.pop();
console.log("After pop:", data); // removes last element

data.push("firefox");
console.log("After push:", data); // adds firefox at end

data.shift();
console.log("After shift:", data); //remove first element