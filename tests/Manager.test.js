const Manager = require('../lib/Manager');
test('creates an manager object', () => {
    const manager = new Manager('Feliks', 24, 'test@email.com', 6);

    expect(manager.name).toEqual('Feliks');
    expect(manager.id).toEqual(24);
    expect(manager.email).toEqual('test@email.com');
    expect(manager.officeNumber).toEqual(6);
})

test('returns name of the manager', () => {
    const manager = new Manager('Feliks', 24, 'test@email.com');

    expect(manager.getName()).toEqual('Feliks');
})

test('returns email of the manager', () => {
    const manager = new Manager('Feliks', 24, 'test@email.com');

    expect(manager.getEmail()).toEqual('test@email.com');
})

test('returns Id of manager', () => {
    const manager = new Manager('Feliks', 24, 'test@email.com');

    expect(manager.getId()).toEqual(24);
})

test('gets managers role as an object', () => {
    const manager = new Manager('Feliks', 24, 'test@email.com');

    expect(manager.getRole()).toEqual('Manager');
})

