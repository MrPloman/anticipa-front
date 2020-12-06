import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public place: any;

  constructor() {
    this.place = {};
  }

  ngOnInit(): void {
    console.log(this.place);
  }
  public imageError(): void {
    console.log('eh');
    this.place.images[0] = '../../../assets/images/placeholder.jpg';
  }
}
