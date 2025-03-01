// const tinderUser = new Object()        // Constructor Method to create object
const FacebookUser = {};

FacebookUser.id = "123abc";
FacebookUser.name = "Sammy";
FacebookUser.isLoggedIn = false;

console.log(Object.keys(FacebookUser)); //Important!!!  Will give all the keys of object
console.log(Object.values(FacebookUser)); // Will give Values of Object
console.log(FacebookUser.hasOwnProperty("name")); // To check if property exist or not

//=== Nested Object ===
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sameer",
      lastname: "Sajid",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);  // Accessing nested objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 } // It will not combine instead it will make a nested object {{},{}} like this

// const obj3 = Object.assign({}, obj1, obj2, obj4) // Can combine like this
const obj3 = { ...obj1, ...obj2 }; //Best approach to combine Objects
// console.log(obj3);

// === Array of Object ===
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];
users[1].email; // Accessing Array of Object
