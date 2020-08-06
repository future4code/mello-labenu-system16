import { IPerson } from "./IPerson";

export class Student implements IPerson {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string[]
  ) {}
}
