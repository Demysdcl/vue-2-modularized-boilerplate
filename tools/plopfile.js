module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('Create Base Module', {
    description: 'Create a module with store, router e components folders',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the module name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../src/modules/{{ camelCase name }}',
        templateFiles: './module',
      },
    ], // array of actions
  })
}
