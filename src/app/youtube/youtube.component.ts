import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnChanges {
  saveUrl: any;
  @Input() url_yt;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['url_yt']) {
      this.saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_yt + '?autoplay=1');
    }
  }


}



