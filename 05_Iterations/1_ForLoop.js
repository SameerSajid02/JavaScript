for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element );
}

//===========For Loop With "IF statement===========
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

//=============Nested For loops==============

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} x ${j} = ${i * j}`);
  }
  // console.log("\n")
}

//==============Printing Array using For Loop==============

let Names = [
  "Sameer",
  "Faizan",
  "Saim",
  "Abdullah",
  "Umair",
  "Usman",
  "Ali",
  "Noman",
];

//Will not use <= bcz Lenght of Arr is counted normally from 1 not like Index from 0
for (let i = 0; i < Names.length; i++) {
  const NamesList = Names[i];
  // console.log(NamesList)
}

//==============break and continue=================

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
