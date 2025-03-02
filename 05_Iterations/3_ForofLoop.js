let arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  // console.log(i)
}

let name = "Sameer";
for (const i of name) {
  // console.log(i);
}

// =============ForOf with Maps============
// Maps are use for unique values
const map = new Map();

map.set("PK", "Pakistan");
map.set("FR", "France");
map.set("UAE", "United Arab Emirates");
map.set("PK", "Pakistan"); // Map will automatically remove this value since it prints only unique values

for (const [key, value] of map) {
  console.log(key, " : ", value);
}

//=======For Of with Objects==========
// Objects cant be itterated with FOROF, It will five error , FORIN is use for Objects
let obj = {
  name: "Sameer",
  Age: 23,
};

// for (const [key,value] of obj) {
//     console.log(key," : ",value);

// }
