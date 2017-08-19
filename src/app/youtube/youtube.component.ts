import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  saveUrl: any;
  @Input() url_yt;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log(this.url_yt + 'youtube components on init URL_YT');
    this.saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_yt);
  }


}



