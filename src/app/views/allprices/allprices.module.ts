import { NgModule } from '@angular/core';

import { AllpricesComponent } from './allprices.component';
import { AllPricesRoutingModule } from './allprices-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';



@NgModule({
  imports: [
    AllPricesRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AllpricesComponent,
    JwPaginationComponent]
})
export class AllPricesModule { }
