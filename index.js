const inquirer = require('inquirer');
const fs = require('fs');
const HtmlRender = require('./src/template.js')
const AllTeamData = [];


function Manager() {
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
            validate: Idinput => {
                if (Idinput !== null) {
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
            validate: OfNumInput => {
                if (OfNumInput) {
                    return true;
                } else {
                    return "Please add an office Number";
                }
            }
        },

    ])
        .then(dataMan => {
            AllTeamData.manager =[]
            AllTeamData.manager.push(dataMan);
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
                Engineer();
                break;

            case "Intern":
                Intern();
                break;

            case "Finish building my team":
                console.log("finished")
                console.log(AllTeamData)
                console.log(AllTeamData)
                createTeamProfile()
                break;

        };
    });
}

function Engineer() {
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
            validate: ansId => {
                if (ansId !== null) {
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
        AllTeamData.engineer=[]
        AllTeamData.engineer.push(data);
        AddTeamMember();
    })
};

function Intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
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
            name: 'internId',
            message: 'Enter the employee Id of the intern',
            validate: ansId => {
                if (ansId !== null) {
                    return true;
                } else {
                    return "Please enter an ID number";
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
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
            name: 'internSchool',
            message: 'Enter the school of the intern',
            validate: emInput => {
                if (emInput !== "") {
                    return true;
                } else {
                    return "Please enter schoolof the intern ";
                }
            }
        },
        
    ])
    .then(data => {
        AllTeamData.intern=[]
        AllTeamData.intern.push(data);
        AddTeamMember();
}
)

}
Manager()

createTeamProfile = () =>{
    fs.writeFileSync("./dist/index.html", HtmlRender(AllTeamData));
    console.log(AllTeamData[0])
}