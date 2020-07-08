const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (name,id,email,officenumber){
        super(name,id,email,6);
        this.officenumber = officenumber;
    }

    getRole(){
      return Manager.constructer.name
  }
  printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
      console.log(`This employee has an email of ${this.officenumber}`);
    }

}

module.exports = Employee