// TODO: Write code to define and export the Employee class
// var uniqid = require('uniqid');


class Employee {
    constructor(name, id, email,) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName(){
        return this.name
    }
    getid(){
            // uniqid.time()

    }
    getemail(){
        window.prompt("What is your email address?", "")
    }
    getRole(){
        return(this.getClass())
    }

  
    printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
    }
  }



  module.exports = Employee