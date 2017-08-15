export class Weather {
  public title ?: string;
  public  icon ?: string ;
  public  icon_link ?: string = '../assets/image/SVG/' + this.icon + '.svg';
  public  weather ?: string;
  public  temp ?: number;
  public  lat ?: number;
  public  lon ?: number;
}

