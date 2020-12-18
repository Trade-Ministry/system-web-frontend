import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllpricesComponent } from './allprices.component';

const routes: Routes = [
  {
    path: '',
    component: AllpricesComponent,
    data: {
      title: 'All Prices'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPricesRoutingModule {}
