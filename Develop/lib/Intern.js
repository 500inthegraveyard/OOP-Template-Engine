const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor (name, id, email, officenumber,role, school){
      super(name,id,email,officenumber,role,school);
      this.school = school;
    }
    getSchool(){
        return "UCLA"
    }

    getRole(){
      
        switch (role) {
          case this.role: "Intern"
            
            break;
        
          default:
            break;
        }
      
  }

  printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
      console.log(`This employee has an email of ${this.officenumber}`);
      console.log(`This employee has an email of ${this.school}`);

    }

}

module.exports = Intern