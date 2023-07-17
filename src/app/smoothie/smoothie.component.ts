import { Component } from '@angular/core';
import { SmoothieService } from '../smoothie.service';
import { Observable } from 'rxjs';
import { Smoothie } from './smoothie';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent {
  constructor(private service: SmoothieService) { }


  smoothiesList: Observable<Smoothie[]> = this.service.getSmoothies();

  // listSmoothies(): Observable<any> {
  //   return this.service.getOffer();
  // }



}
