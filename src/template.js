


function HtmlRender(data) {

    //const manager = data.Manager.map((employee)=>{
    const employeeCards = data.map((employee) => {
        switch (employee.getRole()) {
            case "Manager":
                return `
<div class="card-holder">
     <div class=name>
     <p class=" label"><span class="material-symbols-outlined">
     person
     </span> Manager</p>
        <H2>${employee.name}</H2>
        
     </div>
    <div class=data>
        <ul class="list-group">
            <li class="list">ID:${employee.id}</li>
            <li class="list">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list">Office number: :${employee.officeNumber}</li>
        </ul>
    </div>
</div>`
            case "Engineer":
                return `
 <div class="card-holder">
        <div class=name>
        <p class=" label"> <span class="material-symbols-outlined">
        manage_accounts
        </span> Engineer</p>
           <H2>${employee.name}</H2> 

        </div>
    <div class=data>
           <ul class="list-group">
               <li class="list">ID:${employee.id}</li>
               <li class="list">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
               <li class="list">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
           </ul>
    </div>
</div>`
            case "Intern":
                return `
<div class="card-holder">
         <div class=name>
          <p class=" label"> 
          <span class="material-symbols-outlined">
         local_library
           </span>Intern</p>
         <H2>${employee.name}</H2>

       </div>
   <div class=data>
       <ul class="list-group">
           <li class="list">ID:${employee.id}</li>
           <li class="list">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
           <li class="list">School: ${employee.school}</li>
       </ul>
   </div>
</div>`
        }
    
 
})
/*
//const engineer = data.Engineer.map((eng)=>{
const engineer = data.map((eng) => {
    if (eng.role == 'Engineer') {
        return `
<div class="card-holder">
    <div class=name>
    <p class=" label"> <span class="material-symbols-outlined">
    manage_accounts
    </span> Engineer</p>
       <H2>${eng.name}</H2>
       
    </div>
   <div class=data>
       <ul class="list-group">
           <li class="list">ID:${eng.id}</li>
           <li class="list">Email: <a href="mailto:${eng.email}">${eng.email}</a></li>
           <li class="list">Github: <a href="https://github.com/${eng.github}" target="_blank">${eng.github}</a></li>
       </ul>
   </div>
</div>`
    }
}
)
//const intern = data.Intern.map((int)=>{
const intern = data.map((int) => {
    if (int.role == "Intern") {
        return `
<div class="card-holder">
    <div class=name>
    <p class=" label"> 
    <span class="material-symbols-outlined">
local_library
</span>Intern</p>
       <H2>${int.name}</H2>
    </div>
   <div class=data>
       <ul class="list-group">
           <li class="list">ID:${int.id}</li>
           <li class="list">Email: <a href="mailto:${int.email}">${int.email}</a></li>
           <li class="list">School: ${int.School}</li>
       </ul>
   </div>
</div>`
    }
}

)*/
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>My Team Profile </title>
</head>

<body>
    <header>
        <h2> My Team Profile</h2>
    </header>
    <div class="container">
    ${employeeCards}
   
    </div>

`
}

//${manager}
//  ${engineer}
// ${intern}
module.exports = HtmlRender

/* <div class="card-holder">
          <div class=name>
        <H2>${data.manager.name}</H2>
          </div>
          <div class=data>
            <ul class="list-group">
                <li class="list">ID:${data.manager.id}</li>
                <li class="list">Email: <a href="mailto::${data.manager.email}">manager@jmail.com</a></li>
                <li class="list">Office number: :${data.manager.officeNumber}</li>
            </ul>
           </div>
        </div>
        */