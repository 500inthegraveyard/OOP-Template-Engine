var uniqid = require('uniqid');

class Employee {
    constructor(name, id, email,) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName(){
        prompt("What is your name?")
    }
    getid(){
            prompt(`Your unique ID is ${this.id}`)

    }
    getemail(){
        prompt("What is your email address?")
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
          super(name,id,email);
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
          return this.githubusername;
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
          return this.school
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