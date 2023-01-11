export class Competence {
  id: number | undefined;
  name: string;
  level: number;
  levels: number[] = [];

  constructor(name: string, level: number, id?:number) {
    this.id = id;
    this.name = name;
    this.level = level;
    for (let i = this.level; i > 0; i--) {
      this.levels.push(i);
    }
  }
}
