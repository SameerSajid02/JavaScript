// Map is almost like Filter but , We can perform chaining in Map

const arr = [1,2,3,4,5]

const Numbers =arr
         .map((num)=>num+10)
         .map((num1)=> num1*5 )
         .filter((num)=> num >30)

console.log(Numbers);

