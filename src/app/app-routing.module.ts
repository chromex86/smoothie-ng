import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { SmoothieEditComponent } from './smoothie-edit/smoothie-edit.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: 'smoothie', component: SmoothieComponent },
  { path: 'smoothie/edit', component: SmoothieEditComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
