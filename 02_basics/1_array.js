const myArr = [0, 1, 2, 3, 4, 5]
const cities = ["Karachi", "Lahore"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//       ====Array methods=====

// myArr.push(6)   // Add Value at the end of array
// myArr.push(7)
// myArr.pop()     // Remove value from the end of Array

// myArr.unshift(9)  // Add Value at the start of array
// myArr.shift()    // Remove value from the start of Array

console.log(myArr.includes(9)); // will provide OP in boolean, If Value is in array or not
console.log(myArr.indexOf(3)); 

const newArr = myArr.join();  // Will convert Array nto string 

console.log(typeof myArr);  // Object
console.log(typeof newArr);  // String


console.log("A", myArr);
// Will just take values from 1 index to 3(Range no counted) 
const newArr1 = myArr.slice(1,4) 
console.log(newArr1);

console.log("B", myArr);
// Will not just take values from 1 index to 4 but also will remove these values from orignal Array (Range counted)
const newArr2 = myArr.splice(1,4) 
console.log(newArr2);

console.log("C", myArr);





