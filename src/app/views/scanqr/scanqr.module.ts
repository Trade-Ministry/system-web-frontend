import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ScanqrRoutingModule } from './scanqr-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ScanqrComponent } from './scanqr.component';

@NgModule({
  imports: [
    ScanqrRoutingModule,
    NgxDropzoneModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [ ScanqrComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ScanqrModule { }