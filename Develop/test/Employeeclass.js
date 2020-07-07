var uniqid = require('uniqid');

class Employee {
    constructor(name, id, email,) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName(){
        window.prompt("What is your name?", "")
    }
    getid(){
            uniqid.time()

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

  class Manager extends Employee {
      constructor (name,id,email,officenumber){
          super(name,id,email,6);
          this.officenumber = officenumber;
      }

      getRole(){
        return(this.getClass())
    }
    printInfo() {
        console.log(`This employee's name is ${this.name}`);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee has an email of ${this.email}`);
        console.log(`This employee has an email of ${this.officenumber}`);
      }

  }
  
  class Engineer extends Employee{
      constructor (name,id,email,officenumber, githubusername){
          super(name,id,email,officenumber);
          this.githubusername = githubusername;
      }
      getGithub(){
          window.prompt("what is your gitHub username?", "")
      }

      getRole(){
        return(this.getClass())
    }
    printInfo() {
        console.log(`This employee's name is ${this.name}`);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee has an email of ${this.email}`);
        console.log(`This employee has an email of ${this.officenumber}`);
        console.log(`This employee has an email of ${this.githubusername}`);
      }
  }

  class Intern extends Employee{
      constructor (name, id, email, officenumber, school){
        super(name,id,email,officenumber,school);
        this.school = school;
      }
      getSchool(){
          window.prompt("What school did you go to?", "")
      }

      getRole(){
        return(this.getClass())
    }

    printInfo() {
        console.log(`This employee's name is ${this.name}`);
        console.log(`This employee has an id of ${this.id}`);
        console.log(`This employee has an email of ${this.email}`);
        console.log(`This employee has an email of ${this.officenumber}`);
        console.log(`This employee has an email of ${this.school}`);

      }

     
  }