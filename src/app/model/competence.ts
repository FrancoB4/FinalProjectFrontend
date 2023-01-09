export class Competence {
  id: number | undefined;
  name: string;
  level: number;
  levels: number[];

  constructor(name: string, level: number, id?:number) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.levels = [1, 2, 3, 4, 5];
  }
}
