const Employee = require('./Employee')
class Intern extends Employee {
  constructor(name, id, email,role,school) {
    super(name, id, email,role);
    this.school = school;
  }
  getSchool() {
    return this.school
  }
  getRole() {
    return 'Intern';
  }
}
//exports of class object
module.exports = Intern;
const testIntern = new Intern('Feliks',24, 'felixbor','UNB')
