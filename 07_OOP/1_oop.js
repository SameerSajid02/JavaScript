const user = {
    Name:"Sameer",
    Age:23,
    UserDetails: function(){
         console.log(`UserName: ${this.Name}\nUserAge: ${this.Age}`);
        
    }
}

// console.log(user.Name);
// user.UserDetails()

//...Suppose we have multiple User , So for them we have to create multiple Objects User1, User2 etc which is no way efficient , So we use constructor funcction in this case 

//=======Constructor Function=========

function User(UserName, UserAge , isLoggedIn){
    this.UserName = UserName
    this.UserAge = UserAge
    this.isLoggedIn = isLoggedIn
    this.Greetings = function(){
        console.log(`Welcome ${this.UserName}`);
        
    }
    // return this              //returning this is not neccessary
}


const user1 = new User("Sameer" , 23 , true)
console.log(user1);

const user2 = new User("Faizan",27, true)
console.log(user2);


