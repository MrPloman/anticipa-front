import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  public list(
    url: string,
    perPage: number,
    currentPage: number
  ): Observable<any> {
    return this.http.get(
      `${url}/inmuebles?page[limit]=${perPage}&page[offset]=${currentPage}&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call`
    );
  }
}
