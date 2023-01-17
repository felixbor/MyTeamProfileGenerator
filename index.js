const inquirer = require('inquirer');
const fs = require('fs');const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const HtmlRender = require('./src/template.js')
const AllTeamData =[]


function ManagerInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please provide team manager's name?",
            validate: ansName => {

                if (ansName == "") {
                    return "Please provide team manager's name?"

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this manager's employee ID number?",
            validate: idInput => {
                if (!isNaN(parseInt(idInput))) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this manager's email address?",
            validate: emInput => {
                let Email =emInput.match( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                if (Email) {
                    return  true
                } else {
                    return "please  enter email in proper format";
                }
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: Input => {
                if (!isNaN(parseInt(Input))) {
                    return true;
                } else {
                    return "Please add an office Number";
                }
            }
        },

    ])
        .then(data => {
            let manager = new Manager(data.name,data.id,data.email,'Manager',data.officeNumber,)
            AllTeamData.push(manager);
            AddTeamMember();
        })

}
function AddTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "add",
            message: "What type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Finish building my team"
            ]
        }
    ]).then(choice => {
        switch (choice.add) {
            case "Engineer":
                EngineerInput();
                break;

            case "Intern":
                InternInput();
                break;

            case "Finish building my team":
                console.log("finished")
                console.log(AllTeamData)
                
                createTeamProfile()
                break;

        };
    });
}

function EngineerInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this engineer's name?",
            validate: ansName => {
                if (ansName !== "") {
                    return true;
                } else {
                    return "Please provide an engineer name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's ID number?",
            validate: idInput => {
                if (!isNaN(parseInt(idInput))) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?",
            validate: emInput => {
                let Email =emInput.match( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                if (Email) {
                    return  true
                } else {
                    return "please  enter email in proper format";
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github username?",
            validate: githInput => {
                if (githInput !== "") {
                    return true;
                } else {
                    return "Please provide  engineer's github useername?";
                }
            }
        }
    ]).then(data => {
      let engineer =new Engineer(data.name,data.id,data.email,'Engineer',data.github,)
        AllTeamData.push(engineer);
        AddTeamMember();
    })
};

function InternInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the intern',
            validate: ansName => {
                if (ansName !== "") {
                    return true;
                } else {
                    return "Please provide an intern's  name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee Id of the intern',
            vvalidate: idInput => {
                if (!isNaN(parseInt(idInput))) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the intern',
            validate: emInput => {
                let Email =emInput.match( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                if (Email) {
                    return  true
                } else {
                    return "please  enter email in proper format";
                }
            }
        },
        {
            type: 'input',
            name: 'School',
            message: 'Enter the school of the intern',
            validate: emInput => {
                if (emInput !== "") {
                    return true;
                } else {
                    return "Please enter school of the intern ";
                }
            }
        },
        
    ])
    .then(data => {
       let intern = new Intern(data.name,data.id,data.email,"Intern",data.School, )
        AllTeamData.push(intern);
        AddTeamMember();
}
)

}
ManagerInput()

createTeamProfile = () =>{
    fs.writeFileSync("./dist/index.html", HtmlRender(AllTeamData));
   
}


/*
const peoples = [{name: "Bob", age :35}, {name: "Jim", age: 55}, {name: "Kim", age: 24}]

const messages = peoples.map((person, index) => {
   return `${person.name} is ${person.age} years old`
}).join(',')

console.log(messages)*/


const data = {
    manager: [
      {
        name: 'asdfa',
        id: '52',
        email: 'sdf@dff.sdf',
        officeNumber: '52'
      }
    ],
    engineer: [
      {
        name: 'asdfsad',
        id: '5111',
        email: 'sdf@sdfsdf.sdf',
        github: 'eengineer1'
      },
      {
        name: 'engin 2',
        id: '655',
        email: 'sdsg@dsdf.dsfs',
        github: 'engine 2222'
      }
    ],
    intern: []
  }

 /*
const loop = data.map(position=>{
    if (position.manager) {
        return manager.name
    }
    if (position.intern){
        return intern.name}
    if (position.engineer) {
 return engineer.name
    } 


    }
)
console.log(loop)
*/