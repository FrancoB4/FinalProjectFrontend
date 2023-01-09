export class Study {
  id: number | undefined;
  institution: string;
  description: string;
  date: string;
  state: string;

constructor(institution: string, description: string, date: string, state: string, id?: number) {
    this.id = id;
    this.institution = institution;
    this.description = description;
    this.date = date;
    this.state = state;
  }
}
