import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ScanqrRoutingModule } from './scanqr-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ScanqrComponent } from './scanqr.component';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ScanqrRoutingModule,
    NgxDropzoneModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgQRCodeReaderModule,
    FormsModule
  ],
  declarations: [ ScanqrComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ScanqrModule { }
