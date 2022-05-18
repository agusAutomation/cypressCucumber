const inquirer = require('inquirer');
const { exec } = require('child_process');

let command;

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Select an action: ',
      name: 'action',
      choices: ['open', 'run'],
    },
    {
      type: 'list',
      message: 'Select an environment: ',
      name: 'env',
      choices: ['test', 'dev', 'prod'],
    },
    {
      type: 'list',
      message: 'Want to run a specific Tag: ',
      name: 'tag',
      choices: [
        'none',
        '@regression',
        '@smoke',
      ],
    },
    {
      type: 'list',
      message: 'Select the device: ',
      name: 'device',
      choices: ['desktop', 'mobile', 'tablet'],
    },
  ])
  .then((answers) => {
    console.log(answers.env);

    command = `npx cypress ${answers.action}`;

    switch (answers.env) {
      case 'test':
        command += ` -e baseUrl=https://carejourney.com/`;
        break;
      case 'dev':
        command += ` -e baseUrl=https://carejourney.com/`;
        break;
      case 'prod':
        command += ` -e baseUrl=https://carejourney.com/`;
        break;
      default:
        command += ` -e baseUrl=https://carejourney.com/`;
    }

    if (answers.tag !== 'none') {
      command = `${command},grepTags=${answers.tag}`;
    }

    if (answers.device === 'mobile') {
      command +=
        ' -c viewportWidth=375,viewportHeight=667,userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X)"';
    } else if (answers.device === 'tablet') {
      command +=
        ' -c viewportWidth=1024,viewportHeight=768,userAgent="Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko)"';
    }
    console.log(command);
    exec(command, (error) => {
      if (error) {
        console.log('Error in the execution of the command of testing');
      }
    });
  });
