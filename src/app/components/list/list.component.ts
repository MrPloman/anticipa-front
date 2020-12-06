import { Place } from './../../models/place.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public places: Place[];

  constructor() {
    this.places = [];
  }

  ngOnInit(): void {}
}
