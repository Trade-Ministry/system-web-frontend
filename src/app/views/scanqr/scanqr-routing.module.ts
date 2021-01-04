import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanqrComponent } from './scanqr.component';

const routes: Routes = [
  {
    path: '',
    component: ScanqrComponent,
    data: {
      title: 'Scan QR'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanqrRoutingModule {}
