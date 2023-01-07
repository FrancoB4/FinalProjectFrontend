export class Project {
  id: number | undefined;
  name: string;
  description: string;
  url: string;
  image: string;

  constructor(name: string, description: string, url: string, image: string, id?: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.image = image;
  }
}
