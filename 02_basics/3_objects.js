//========== Object Literal ==========

const Sym = Symbol("key1");

const Info = {
  name: "Sameer",
  "full name": "Sameer Sajid", // For explanation how Object works
  Age: 23,
  [Sym]: "MyKey",
  Email: "Abc@Gmail.com",
  LastLogIn: ["Monday", "Tuesday"]
};

console.log(Info.Email);
console.log(Info["Email"]);     //Can be accessed like this aswell
console.log(Info["full name"]); // It can only be accessed like this
console.log(Info[Sym]);    // How to access Symbols
// console.log(Info);

Info.Email = "Sameer@gmail.com"  //Updating Values in object
// Object.freeze(Info); // Preventing Object from updating


Info.greeting = function(){
       console.log("Hello World");
    
}

Info.greetingTwo = function(){
    console.log(`Hello ${this.name}` )
}

Info.greeting()
Info.greetingTwo()
