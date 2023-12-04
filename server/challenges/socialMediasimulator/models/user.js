const uuid = require('uuid')
class User {
    constructor( username, fullname, password,joiningDate, active){
        this.id = uuid.v4();
        this.username = username;
        this.fullname = fullname;
        this.password = password;
        this.joiningDate = joiningDate;
        this.active = active;
    }
    getUser(){
        // return {username: this.username, fullname: this.fullname, password: this.password, joiningDate: this.joiningDate, active: this.active}
        return this
    }
    
}
module.exports = User
// sample use case
// const newUser = new User('john_doe', 'John Doe', 'password123', '2023-01-01', true);
// console.log(newUser.getUser());