export class Certification {
  id: number | undefined;
  url: string;
  url_img: string;

  constructor(id:number, url: string, url_img: string) {
    this.id = id;
    this.url = url;
    this.url_img = url_img;
  }
}
