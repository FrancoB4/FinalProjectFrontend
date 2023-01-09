export class Certification {
  id: number | undefined;
  url: string;
  url_img: string;

  constructor(url: string, url_img: string, id?:number) {
    this.id = id;
    this.url = url;
    this.url_img = url_img;
  }
}
