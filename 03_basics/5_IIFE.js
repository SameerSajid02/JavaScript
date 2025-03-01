// ===========Immediately Invoked Function Expressions (IIFE)=============

// They are use to save specific Function from the pollution of Global Scope for i.e if there are many variable declared in gloal scope and we dont want any disturbance in our Function due to those variables in global scope the we use IIFE on those functions.


(function ABC(){
    // named IIFE
    console.log(`DB CONNECTED`);

})(); //=> ; to end the code


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sameer')