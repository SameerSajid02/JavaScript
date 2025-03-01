const user = {
    userName: "Sameer",
    Age: 23,
    price: 999,
  
    WelcomeMessage: function () {
      console.log(`${this.userName}, Welcome to our Website `);
      //"This" is use to access Current Context
  
      // console.log(this)  // in this case whole object is current context
    },
  };
  
  user.WelcomeMessage();
  user.userName = "Faizan";
  user.WelcomeMessage();
  
  // console.log(this); // in node Enviroment "this"  always give OP as empty object {}
  
  function ABC() {
    const userName = "Sameer";
    console.log(this.userName); // it will give undefined since Current context only work in obj
  }
  