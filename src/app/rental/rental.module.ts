import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { UppercasePipe } from '../common/pipes/uppercase.pipe';

@NgModule({
  declarations: [
    RentalComponent,    
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    HttpClientModule,
    NgPipesModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
