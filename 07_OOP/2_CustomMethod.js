//============With Direct Function=============
function myFunction() {
    console.log("Hello, world!");
}

// Adding properties to the function
myFunction.name = "GreetingFunction";
myFunction.count = 0;
myFunction.increment = function () {
    this.count++;
};

// Using the properties
console.log(myFunction.name); // Output: GreetingFunction
console.log(myFunction.count); // Output: 0

myFunction.increment();
console.log(myFunction.count); // Output: 1


//===========With Instances==============

function Person(name) {
    this.name = name;
}

// Adding a method to all instances using prototype
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // Hello, my name is Alice
person2.sayHello(); // Hello, my name is Bob
