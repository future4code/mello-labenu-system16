import { Student } from './common/Student';
import { FileManager } from './common/FileManager';

const mytest: Student = new Student(
  '1',
  'teste',
  'teste@gmail.com',
  '17-08-2019',
  ['rsrsrsr', 'tststst']
);

const fileManager = new FileManager();

fileManager.addObjectToArray('students.json', mytest);

console.log(fileManager.getArray('students.json'));
