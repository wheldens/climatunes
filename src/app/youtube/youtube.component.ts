import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {YoutubeService} from '../../assets/services/youtube.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnChanges {
  id: string;
  url: any;
  baseUrl: string = 'https://www.youtube.com/embed/';
  @Input() songSearch;

  constructor(private _youtubeService: YoutubeService, private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['songSearch']) {
      this.getYouTubeID(this.songSearch);
    }
  }

  getYouTubeID(song) {
    this._youtubeService.getYoutTubeID(song)
      .subscribe(res => this.id = res.items[0].id.videoId);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.id);
  }


}



