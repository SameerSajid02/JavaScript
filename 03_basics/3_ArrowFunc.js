// Normal Function
function Abc(){    
}

// Arrow Function
const ABC=()=>{
}


const addNum =(num1,num2)=>{
return num1+num2
}

console.log(addNum(2,2));

// Can also use implicit return( No need of return statement for 1 line code)

const mulNum =(num1,num2)=>  num1*num2
console.log(mulNum(2,6));


const Obj = ()=> ({UserName:"Sameer" , Age:23})   // Have to wrap in () for using obj

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()