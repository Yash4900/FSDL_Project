const inquirer = require('inquirer');

inquirer.prompt([
    {
      name: 'product',
      message: 'Do you want Mobile or do you want Laptop?',
    },
    {
      type: 'list',
      name: 'brand',
      message: 'Which brand?',
      choices: ['Asus', 'Apple', 'Samsung', 'Lenovo'],
    },
    {
      type: 'checkbox',
      name: 'ram',
      message: 'How much ram you require?',
      choices: [
        '4 GB', '8 GB', '16 GB',
      ],
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
  });
