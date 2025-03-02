// ForEach is a built-in method in Array

let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  //  console.log(val);
});

// For Each can also give Index of an Array along with complete Array
arr.forEach((val, index, completeArr) => {
  // console.log(val ,index,completeArr);
});

//===========Object in Array iteration=============

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item, index) => {
  console.log(item.languageName);
});

//========Map for comparison=========

// arr.map( (val)=>{
//   console.log(val);

// } )
