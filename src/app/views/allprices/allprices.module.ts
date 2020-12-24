import { NgModule } from '@angular/core';

import { AllpricesComponent } from './allprices.component';
import { AllPricesRoutingModule } from './allprices-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    AllPricesRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [ AllpricesComponent ]
})
export class AllPricesModule { }
