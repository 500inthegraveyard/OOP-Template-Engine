// TODO: Write code to define and export the Employee class
// var uniqid = require('uniqid');


class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
  
      
    }
  
    getName(){
        return this.name
    }
    getId(){
          return this.id

    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }

  
    printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
    }
  }



  module.exports = Employee