import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output() emitNext = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  public next(): void {
    this.emitNext.emit(true);
  }
}
