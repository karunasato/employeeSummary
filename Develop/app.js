const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const { create } = require("domain");
//when done, fs.writeFile(outputPath, render(team), err=> console.log(err||"success!"))
const team = [];

function makeManager(){
    inquirer.prompt([
        {
            message:"What is their name?",
            name: "name"
        },
        {
            message: "What is their id number?",
            name: "id"
        },
        {
            message:"What is their email?",
            name: "email"
        },
        {
            message: "What is their office number?",
            name: "office"
        }
]).then(data=> {
    const emp = new Manager(data.name, data.id, data.email,data.office);
    team.push(emp);
    console.log("Manager created successfully!, here's your current team - ", team)
    setTimeout(createTeam, 2000)
})
}
function makeEngineer(){
    inquirer.prompt([
        {
            message:"What is their name?",
            name: "name"
        },
        {
            message: "What is their id number?",
            name: "id"
        },
        {
            message:"What is their email?",
            name: "email"
        },
        {
            message: "What is their github?",
            name: "github"
        }
]).then(data=> {
    const emp = new Engineer(data.name, data.id, data.email,data.github);
    team.push(emp);
    console.log("Engineer created successfully!, here's your current team - ", team)
    setTimeout(createTeam, 2000)
})
}
function makeIntern(){
    inquirer.prompt([
        {
            message:"What is their name?",
            name: "name"
        },
        {
            message: "What is their id number?",
            name: "id"
        },
        {
            message:"What is their email?",
            name: "email"
        },
        {
            message: "What school did they go to?",
            name: "school"
        }
]).then(data=> {
    const emp = new Intern(data.name, data.id, data.email,data.school);
    team.push(emp);
    console.log("Intern created successfully!, here's your current team - ", team)
    setTimeout(createTeam, 2000)
})
}

function createTeam(){
    inquirer
  .prompt({
      message:"What role is being added?",
      type: "list",
      choices: ["Manager", "Engineer", "Intern", "I'm done creating the team."],
      name: "type"
  })
  .then(answers => {
    switch(answers.type){
        case "Manager":
            answers.officeNumber//do this if answer.type === "Manager"
        makeManager();
        break;
        case "Engineer":
            answers.github
        makeEngineer();
        break;
        case "Intern":
            answers.school
        makeIntern();
        break;
        default:
        makeTeam();
        //some default action here typically
        break;
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
  
}

function makeTeam(){
    fs.writeFile(outputPath, render(team), err=> console.log(err || "Success!"))
}
createTeam()

