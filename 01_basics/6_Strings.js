const Fname = "Sameer"
const Lname = "Sajid"

// console.log(name + repoCount + " Value");  // Not a good approach for Concatinating
console.log(`My first name is ${Fname} and last name is ${Lname}`); //Right approach

console.log(Fname[2]); 

let userone = new String("Faizan");

//Functions of string
console.log(userone.length);
console.log(userone.toUpperCase());
console.log(userone.charAt(3));
console.log(userone.indexOf('a'))

const newUser = userone.substring(0,4)
console.log(newUser);


const anotherUser = userone.slice(0,-2)
console.log(anotherUser)
console.log([1, 2, , 4, 5].slice(1, 4));  //[ 2, <1 empty item>, 4 ]

const habbit = '      I love to play cricket     '
console.log(habbit.trim());  //Trim will remove whitespace gaps


const url = "https://Smaeer.com/Sameer%20Sajid"

console.log(url.replace('%20', '-'))
console.log(url.includes('Jameel'))  //Finding if word exist in string or not

