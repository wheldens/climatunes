import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{

  pageNumber: number = 1;
  @Output() page = new EventEmitter();

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.page.emit(this.pageNumber)
  }

  previousPage() {
    this.pageNumber = this.pageNumber - 1;
    this.page.emit(this.pageNumber);
  }

}
