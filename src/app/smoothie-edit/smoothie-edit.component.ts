import { Component } from '@angular/core';
import { Smoothie } from '../smoothie/smoothie';
import { SmoothieService } from '../smoothie.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-smoothie-edit',
  templateUrl: './smoothie-edit.component.html',
  styleUrls: ['./smoothie-edit.component.css']
})
export class SmoothieEditComponent {

  constructor(private service: SmoothieService) {}

  nameControl = new FormControl('');
  descriptionControl = new FormControl('');
  priceControl = new FormControl('');

  save() {
    console.log('name:', this.nameControl.value);
    this.service.addSmoothie( <Smoothie> {'name': this.nameControl.value, 'price': <number><any>this.priceControl.value, 'description': this.descriptionControl.value}).subscribe(x => console.log(x));
  }


}
