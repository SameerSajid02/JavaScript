const accountId = 144553; //Cant be updated at any point.........
let accountEmail = "Sameer@google.com"; //Resolve the scope issue........
var accountPassword = "12345"; //Prefer not to use var because of issue in block scope and functional scope...
accountCity = "Karachi"; // Not a good method to be used....
let accountState; //Just initializing not declaring and will remain undefined.....

// accountId = 2 // not allowed .......

//Updating Values
accountEmail = "Faizan@Yahoo.com";
accountPassword = "21212121";
accountCity = "Lahore";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
