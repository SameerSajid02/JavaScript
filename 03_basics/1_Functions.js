function AddNum(Num1, Num2) {
  return Num1 + Num2;
}

console.log(AddNum(2, 4));

// let Result = AddNum(2,4);
// console.log(Result);

function LogIn(userName) {
  if (!userName) {
    // ===> is equalent to userName === undefined
    console.log("Please enter user Name");
    return;
  } else {
    return console.log(`${userName} has logged in`);
  }
}

LogIn("Sameer");

//rest operator.............
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

// Function with Objects..........
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

//Functions with Array..............
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray;
}

console.log(returnSecondValue(myNewArray));
