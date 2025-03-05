new Promise((resolve , reject)=>{

    setTimeout(()=>{
       console.log("Async Task 1 Completed")
       resolve()
    },2000)
}).then(()=>{
    console.log("Promise resolved # 1");

})

// const promOne = new Promise((resolve , reject)=>{

//     setTimeout(()=>{
//        resolve({Name:"Sameer" , Age:"23"})
//     },1000)
// })

// prom.then((user)=>{
//     console.log(user.Name)
// })

// ===========Chaining and Catching Errors

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ Name: "Sameer", Age: 23 });
//     } else {
//       reject("Error!! Something went wrong");
//     }
//   }, 1000);
// })
//   .then((obj) => {
//     console.log(obj);
//     return obj.Name;
//   })
//   .then((Name) => {
//     console.log(Name);
//   })
//   .catch((Error) => {
//     console.log(Error);
//   }).finally(()=>{
//     console.log("Promised has been fullfilled");

//   })

//==============Promise with Async Await=========

//Async Await is used when we want that work to be completed then run the rest of work

const promTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ Name: "Sameer", Age: 23 });
    } else {
      reject("Error!! Something went wrong");
    }
  }, 1000);
});

async function ConsumePromise(){

   try {
    const response = await promTwo
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}

ConsumePromise()


