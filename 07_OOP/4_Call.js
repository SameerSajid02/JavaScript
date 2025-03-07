
function SetUsername(username,email,password){
    //complex DB calls
    this.username = username
    this.email = email
    this.password = password
}

function createUser(username, email, password){
    SetUsername.call(this,username,email,password)     //Call keyword hold the reference of Function
   
   
}

const User1 = new createUser("Sameer", "Sameer@fb.com", "123")
console.log(User1);