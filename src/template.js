


 function HtmlRender (data) {
     
  const manager = data.manager.map((employee)=>{
     return `
<div class="card-holder">
     <div class=name>
     <p class=" label"> Manager</p>
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
    }
)
const engineer = data.engineer.map((eng)=>{
    return `
<div class="card-holder">
    <div class=name>
    <p class=" label"> Engineer</p>
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
)
const intern = data.intern.map((int)=>{
    return `
<div class="card-holder">
    <div class=name>
    <p class=" label"> Intern</p>
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
)
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>My Team Profile </title>
</head>

<body>
    <header>
        <h2> My Team Profile</h2>
    </header>
    <div class="container">
    ${manager}
    ${engineer}
    ${intern}
    </div>

`
}


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