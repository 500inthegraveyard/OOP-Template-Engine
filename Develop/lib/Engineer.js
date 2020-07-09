const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor (name,id,email,officenumber,role){
        super(name,id,email,officenumber,GitHubUser, role);
        this.GitHubUser = GitHubUser;
        this.role = role;
    }
    getGithub(){
        return "GitHubUser"
    }

    getRole(){
      return this.role + "Engineer"
  }
  printInfo() {
      console.log(`This employee's name is ${this.name}`);
      console.log(`This employee has an id of ${this.id}`);
      console.log(`This employee has an email of ${this.email}`);
      console.log(`This employee has an email of ${this.officenumber}`);
      console.log(`This employee has an email of ${this.githubusername}`);
    }
}

module.exports = Engineer
