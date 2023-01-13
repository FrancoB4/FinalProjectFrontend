export class Certification {
  id: number | undefined;
  url: string;
  image: string;

  constructor(url: string, image: string, id?:number) {
    this.id = id;
    this.url = url;
    this.image = image;
  }
}
