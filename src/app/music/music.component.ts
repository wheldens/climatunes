import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../assets/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=rain&api_key=2cbf2a70579e7867dc9233ea9ca83d77&format=json\n';

  data: any;
  search: any;

  constructor( private _musicService: MusicService) { }

  ngOnInit() {
    this._musicService.getData(this.BASE_URL)
      .subscribe(res => this.data = res);
  }

  showData(){
    console.log(this.data);
  }
}
