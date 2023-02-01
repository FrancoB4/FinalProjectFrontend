export class Study {
  id: number | undefined;
  institution: string;
  description: string;
  startDate: string;
  state: string;

constructor(institution: string, description: string, date: string, state: string, id?: number) {
    this.id = id;
    this.institution = institution;
    this.description = description;
    this.startDate = date;
    this.state = state;
  }
}
