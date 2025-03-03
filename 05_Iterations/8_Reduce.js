const arr = [1, 2, 3];

const Total = arr.reduce((accumulater, currentValue) => {
  return accumulater + currentValue;
}, 0);

// "0" is Initial value which will also be starting value of accumulater, First value of array will be currentvalue and while we loop through currentvalue will become from 1 to 2 then 2 to 3 as per array and the value of accumulator from 0 to accumulator + Current Value which in this case will be from 0 to 1 to 3 and the final return will be 6

console.log(Total);

//==============Real World Scenario================
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const TotalCost = shoppingCart.reduce((acc, items) => {
  return acc + items.price;
}, 0);

console.log(TotalCost);
