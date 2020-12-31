import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    PricesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    CommonModule,
    NgOptionHighlightModule,
    NgxSpinnerModule
  ],
  declarations: [ PricesComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PricesModule { }
