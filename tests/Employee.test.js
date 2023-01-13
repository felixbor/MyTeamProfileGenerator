const Employee = require('../lib/Employee');

describe(('Employee'), () => {
  describe(('getName'), () => {
    it('should return the employee name', () => {
      const name = 'Antonio';
      const employee = new Employee(name, 10, 'enmployee@email.com');
      expect(employee.getName()).toBe(name);
    })
  })
  describe(('getId'), () => {
    it('should return the Id of the employee', () => {
      const id = 10;
      const employee = new Employee('Antonio', id, 'enmployee@email.com');
      expect(employee.getId()).toBe(id);
    })
  })
  describe(('getEmail'), () => {
    it('should return the email of the employee', () => {
     const email = 'enmployee@email.com';
      const employee = new Employee('Antonio', 10, email);
      expect(employee.getEmail()).toBe(email);
    })
  })
  describe(('getRole'), () => {
    it('should return the role of the employee', () => {
      const employee = new Employee('Antonio', 10, 'enmployee@email.com');
      expect(employee.getRole()).toBe('Employee');
    })
  })
})