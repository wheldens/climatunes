export class Song {
  public artist : string;
  public track : string;
  public url : string;
  public imageSM : string;
  public imageLG : string;
  public play : boolean = false;
  public pause ?: number;

  constructor(artist:string, name:string, url:string, imageLG:string, imageSM:string) {
    this.artist = artist;
    this.track = name;
    this.url = url;
    this.imageSM = imageSM;
    this.imageLG = imageLG;
  }
}

