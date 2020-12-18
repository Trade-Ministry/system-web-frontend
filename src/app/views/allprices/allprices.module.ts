import { NgModule } from '@angular/core';

import { AllpricesComponent } from './allprices.component';
import { AllPricesRoutingModule } from './allprices-routing.module';


@NgModule({
  imports: [
    AllPricesRoutingModule
  ],
  declarations: [ AllpricesComponent ]
})
export class AllPricesModule { }
