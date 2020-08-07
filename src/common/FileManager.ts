import * as fs from 'fs';

export class FileManager {
  getArray(fileName: string): Object[] {
    try {
      const fileData = fs.readFileSync(`./src/data/${fileName}`).toString();

      if (fileData) {
        return JSON.parse(fileData);
      }
    } catch (error) {
      console.log(`Erro na leitura dos dados em ./src/data/${fileName}`);
    }
    return [];
  }

  addObjectToArray(fileName: string, newObject: Object): void {
    try {
      const data: Object[] = this.getArray(fileName);
      data.push(newObject);

      const newData = JSON.stringify(data, null, 2);
      fs.writeFileSync(`./src/data/${fileName}`, newData);

      console.log(`Objeto adicionado com sucesso em ./src/data/${fileName}`);
    } catch (error) {
      console.log(
        `Erro na edição dos dados em ./src/data/${fileName} com ${newObject}`
      );
    }
  }
}
