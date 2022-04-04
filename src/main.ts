import inquirer from 'inquirer';
import fs from 'fs'
import path from 'path'

import { createComponent } from './utils/createComponent'

const dir = path.join(__dirname, '../components/')

inquirer.prompt([
  {
    name: 'componentName',
    message: 'O nome do componente:',
    default: 'Component'
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Qual o framework que deseja utilizar?',
    choices: ['React', 'Vue'],
  },
]).then(answers => {
  if (!fs.existsSync(dir)) {
    //Efetua a criação do diretório
    fs.mkdir(dir, (err) => {
      if (err) {
        console.log("Deu ruim...");
        return
      }

      console.log("Diretório criado! =)")
    });
  }
  createComponent(dir, answers);
})