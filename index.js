const inquirer = require('inquirer');

function init () {
    inquirer
      .prompt([
        {
            type: 'input',
            message: 'Please input 3 letters for your logo: ',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What TEXT color would you like? keywords or hex number: ',
            name: 'text-color',
        },
        {
            type: 'checkbox',
            message: 'Please choose a shape: ',
            name: 'shape',
            choices: [
                { value: 'circle' },  
                { value: 'triangle' },
                { value: 'square' },
            ]
        },
        {
            type: 'input',
            message: 'What SHAPE color would you like? keywords or hex number: ',
            name: 'shape-color',
        },
    
    
    
    
    ])
    .then((data) => {
        fs.writeFile (`${data.text}.svg`, (data),(err) => err ? console.log(err) : console.log('Successfully created README file!'))
         
    });
}
    init ();