import { NgModule } from '@angular/core';

import { AllpricesComponent } from './allprices.component';
import { AllPricesRoutingModule } from './allprices-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    AllPricesRoutingModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [
    AllpricesComponent,
    JwPaginationComponent]
})
export class AllPricesModule { }
