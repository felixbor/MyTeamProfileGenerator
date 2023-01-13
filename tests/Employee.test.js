const Employee = require('../lib/Employee');

describe(('Employee'), () => {
  describe(('getName'), () => {
    it('should return the employee name', () => {
      const name = 'Antonio';
      const result = new Employee(name, 10, 'enmployee@email.com');
      expect(result.getName()).toBe(name);
    })
  })
  describe(('getId'), () => {
    it('should return the Id of the employee', () => {
      const id = 10;
      const result = new Employee('Antonio', id, 'enmployee@email.com');
      expect(result.getId()).toBe(id);
    })
  })
  describe(('getEmail'), () => {
    it('should return the email of the employee', () => {
     const email = 'enmployee@email.com';
      const result = new Employee('Antonio', 10, email);
      expect(result.getEmail()).toBe(email);
    })
  })
  describe(('getRole'), () => {
    it('should return the role of the employee', () => {
      const result = new Employee('Antonio', 10, 'enmployee@email.com');
      expect(result.getRole()).toBe('Employee');
    })
  })
})