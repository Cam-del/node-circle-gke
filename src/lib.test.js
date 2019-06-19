const lib = require('./lib');

test('helloWorld() returns some special text', () => {
  expect(lib.helloWorld()).toBe('Hello World! I have been deployed in Kubernetes! With great difficulty and tears flowing down my face');
});
