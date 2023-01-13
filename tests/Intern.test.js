const Intern = require('../lib/Intern.js')


test('creates an object of inters data ', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com', 'Bootcamp');

    expect(intern.name).toEqual('Feliks');
    expect(intern.id).toEqual(24);
    expect(intern.email).toEqual('test@email.com');
    expect(intern.school).toEqual('Bootcamp');
})

test('return name', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com',);

    expect(intern.getName()).toEqual('Feliks');
})

test('return email', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com');

    expect(intern.getEmail()).toEqual('test@email.com');
})

test('return id', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com');

    expect(intern.getId()).toEqual(24);
})

test('return role of the Interns as Intern', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com');

    expect(intern.getRole()).toEqual('Intern');
})

test('return school of the intern', () => {
    const intern = new Intern('Feliks', 24, 'test@email.com',  'Bootcamp');

    expect(intern.getSchool()).toEqual('Bootcamp');
})
