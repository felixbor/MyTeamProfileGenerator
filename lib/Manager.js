const Employee = require('./Employee')
class Manager extends Employee {
  constructor(name, id, email, role,officeNumber) {
    super(name, id, email,role);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}
//exports of class object
module.exports = Manager;