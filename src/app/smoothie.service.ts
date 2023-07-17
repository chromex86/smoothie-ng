import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Smoothie } from './smoothie/smoothie';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  constructor(private httpClient: HttpClient) { }


  getSmoothies(): Observable<Smoothie[]> {
    return this.httpClient.get<Smoothie[]>("/smoothies/all");
  }

  addSmoothie(smoothie: Smoothie): Observable<any> {
    console.log('adding:', smoothie);
    return this.httpClient.post<Smoothie>("/smoothies/save", smoothie);
  }

}
