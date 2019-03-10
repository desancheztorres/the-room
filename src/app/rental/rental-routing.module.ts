import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const rentalRoutes: Routes = [
  { 
    path: '',
    component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent },
      { path: ':rentalId', component: RentalDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(rentalRoutes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }
