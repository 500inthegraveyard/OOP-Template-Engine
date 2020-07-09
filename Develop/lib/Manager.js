const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (name,id,email, role, officenumber){
        super(name,id,email,officenumber, role);
        this.officenumber = officenumber;
    }

    getOffice(){
        return 100
    }
    getRole(){
        switch(this.role){
            case "Employee": "Manager"
        }
      
  }
  printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
      console.log(`This employee has an email of ${this.officenumber}`);
    }

}

module.exports = Manager