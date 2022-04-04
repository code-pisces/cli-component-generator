import fs from 'fs'
import { IComponent } from '../interfaces'
import { vueTemplate, reactTemplate } from '../templates/index'

export const createComponent = async (path: string, { framework, componentName }: IComponent) => {
  let extension;
  let data;
  switch (framework) {
    case 'React':
      extension = 'tsx'
      data = reactTemplate(componentName)
      break;
    case 'Vue':
      extension = 'vue'
      data = vueTemplate(componentName)
      break;
    default:
      throw new Error('Framework não suportado')
  }

  const fileName = `${path}/${componentName}.${extension}`

  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('O arquivo foi criado!');
  });
}
