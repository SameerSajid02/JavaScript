const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

// arr1.push(arr2) // wrong approach to combime array since it will add array into array
// console.log(arr1)
// console.log(arr1[5][1]) // To access element from array into array

// const newArr = arr1.concat(arr2)   // Can be done like this but not good approach
// console.log(newArr);

const AllNum = [...arr1,...arr2]  // Right Approach and can combine multiple arrays aswell
console.log(AllNum);

//  Rare scenario
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// console.log(Array.isArray("Sameer"))  // Asking if its Array? in this case "false"
// console.log(Array.from("Sameer"));  // Coverting it to Array [ 'S', 'a', 'm', 'e', 'e', 'r' ]
// console.log(Array.from({Name:"Sameer" , Age: 23})); // Will give empty Array for object  = []


// const mapper = new Map([ ["1", "a"],  ["2", "b"],]);
  
//   console.log(Array.from(mapper.values()));// ['a', 'b'];
//   console.log(Array.from(mapper.keys()));// ['1', '2'];


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Coverting into Array