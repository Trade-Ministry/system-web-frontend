import { NgModule } from '@angular/core';

import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

@NgModule({
  imports: [
    PricesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    CommonModule,
    NgOptionHighlightModule
  ],
  declarations: [ PricesComponent ]
})
export class PricesModule { }
