const uuid = require('uuid')
class User {
    constructor( username, fullname, password,joiningDate, active){
        this.id = uuid.v4();
        this.username = username;
        this.fullname = fullname;
        this.password = password;
        this.joiningDate = joinDate;
        this.active = active;
    }
    getUser(){
        return this
    }
    
}

// sample use case
// const newUser = new User('john_doe', 'John Doe', 'password123', '2023-01-01', true);
// console.log(newUser.getUser());