let studentName = 'Priyanka'
let str = studentName.split("")      //split the name into an array of words

for (let i = str.length - 1; i >= 0; i--){ //loop through the array in reverse order
    console.log(str[i])
}