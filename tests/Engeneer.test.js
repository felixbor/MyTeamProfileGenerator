const Engineere = require('../lib/Engineer.js');
const Engineer = require('../lib/Engineer')

test('creates an object with engineer data', () => {
    const engineer = new Engineer('Feliks', 24, 'test@email.com', 'Engineer','felixbor' );

    expect(engineer.name).toEqual('Feliks');
    expect(engineer.id).toBe(24);
    expect(engineer.email).toEqual('test@email.com');
    expect(engineer.role).toEqual('Engineer');
    expect(engineer.github).toEqual('felixbor');
})

test('should return name ', () => {
    const engineer = new Engineer('Feliks', 24, 'test@email.com');
    expect(engineer.getName()).toEqual('Feliks');
})

test('should return the email of the employee', () => {
    const engineer = new Engineer('Feliks', 24, 'test@email.com');
    expect(engineer.getEmail()).toEqual('test@email.com');
})

test('should return id ', () => {
    const engineer = new Engineer('Feliks', 24, 'test@email.com');
    expect(engineer.getId()).toBe(24);
})

test('should return the role of the employee', () => {
    const engineer = new Engineer('Feliks', 24, 'test@email.com');
    expect(engineer.getRole()).toEqual('Engineer');
})

test('should return the github of the engineer', () => {
      const github = 'felixbor';
    const engineer = new Engineer('Feliks', 24, 'test@email.com',"Engineer",github);
  
    expect(engineer.getGithub()).toEqual('felixbor');
})
