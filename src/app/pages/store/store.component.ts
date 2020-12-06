import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public loading: boolean;
  public url: string = environment.API;
  public perPage: number;
  public currentPage: number;
  public data: any;
  public places: Place[] = [];
  metadata: any;
  public disableButton: boolean;

  constructor(public http: HttpService) {
    this.loading = true;
    this.perPage = 32;
    this.currentPage = 0;
    this.places = [];
    this.disableButton = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.getPlaces();
  }

  public getPlaces(): void {
    this.http
      .list(this.url, this.perPage, this.currentPage)
      .subscribe((res) => {
        if (res) {
          this.metadata = res;
          const data = res.data;
          this.setPlaces(data);
        }
      });
  }

  public setPlaces(data: any): void {
    data.forEach((place: any) => {
      this.places.push({
        id: place.id,
        m2: place.attributes.field_inmu_area_cons,
        images: place.attributes.field_inmu_imag_arra,
        name: place.attributes.field_inmu_nomb_call,
        numberHabit: place.attributes.field_inmu_nume_habi,
        location: place.attributes.field_inmu_pobl,
        price: Math.round(place.attributes.field_inmu_prec),
        reference: place.attributes.field_inmu_refe,
        type:
          place.attributes.field_inmu_tipo_sin_agru === 'Pisos'
            ? 'Piso'
            : place.attributes.field_inmu_tipo_sin_agru === 'Casas'
            ? 'Casa'
            : '',
        street: place.attributes.field_inmu_tipo_via,
      });
    });
    this.loading = false;
    console.log(this.places.length);
  }

  public getEmit($event: boolean): void {
    const limit = parseInt(this.metadata.meta.count);
    this.loading = $event;
    this.currentPage = this.currentPage + this.perPage;
    if (limit - 1 > this.currentPage) {
      this.getPlaces();
    } else {
      this.loading = false;
      this.currentPage + this.perPage >= limit
        ? (this.disableButton = true)
        : (this.disableButton = false);
    }
  }
}
