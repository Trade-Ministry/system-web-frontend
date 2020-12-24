import { NgModule } from '@angular/core';

import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    PricesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ PricesComponent ]
})
export class PricesModule { }
