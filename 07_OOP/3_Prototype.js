let User = {
    Name:"Sameer",
    Age:23,
    isLoggedIn:true,
    UserDetail: function(){
        console.log(`UserName: ${this.Name} Age: ${this.Age}`);
        
    }
}

// We can make custom Method in High level hierarchy which is Object

Object.prototype.SayHii=function(){
    console.log("Hii, Welcome to ABC website");
    
}  // Now this Custom Method can be used with Arrays , strings, Function etc since OBJ is top level

User.SayHii()

let arr = ['Sameer' , 'Faizan' , 'Saim' ]
arr.SayHii()

//=========Small scenario based on prototype=========
const UserName = "Sameer     "  //Removing white spaces


String.prototype.trueLenght = function(){
    console.log(`${this}`); // Checking Current context
    console.log(`The True Lenght is: ${this.trim().length} `);
}

UserName.trueLenght()
"Faizan  ".trueLenght()
"Saim                ".trueLenght()
