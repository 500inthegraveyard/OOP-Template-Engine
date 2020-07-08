const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor (name, id, email, officenumber, school){
      super(name,id,email,officenumber,school);
      this.school = school;
    }
    getSchool(){
        return this.school
    }

    getRole(){
      return "Intern"
  }

  printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
      console.log(`This employee has an email of ${this.officenumber}`);
      console.log(`This employee has an email of ${this.school}`);

    }

}

module.exports = Employee