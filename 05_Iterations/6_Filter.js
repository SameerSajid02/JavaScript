// We use "Filter" since ForEach dosent return anything

// const coding  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // Will give "undefined"

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Number = myNums.filter((num) => {
  return num > 4;
});
// console.log(Number);

//=============Real World Scenario=====================
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


//User wants books related to science

const UseBooks = books.filter((bks)=>{
 return bks.genre === "Science"  // Dosent need to apply If condition since it will filter itself
})

console.log(UseBooks);
