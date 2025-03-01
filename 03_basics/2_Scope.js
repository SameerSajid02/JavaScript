// from "{"  to "}"  is ====> Block Scope and ouside it is ====> Global Scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);  // Will give error because "let" cant pass value out of scope
// console.log(b);   // Will give error because "const" cant pass value out of scope
// console.log(c);  // Value will be printed since "var" make value global Scope

// ===========Scope in Nested Functions============
function Outer(){
    const Username = "Sameer"
    
    function Inner(){
      const Website = "Youtube"
      console.log(Username);  // Can be accessed inside nested Scope
      
    }
    // console.log(Website);  // Cant be accessed outside Scope
    Inner()
}

Outer()

// ==================Same For If Conditions===============

if(true){
    const Username = "Faizan"

    if(Username == "Faizan"){
        const website = "Facebook"
        console.log(Username);
        
    }
    // console.log(Website);   // Cant be accessed outside Scope
    

}

//======================== Scenarios ====================

console.log(addone(5)) // Will be printed

function addone(num){
    return num + 1
}



// addTwo(5)  // Will give error due to Hoisting 
const addTwo = function(num){
    return num + 2
}
