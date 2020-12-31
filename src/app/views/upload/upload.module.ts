import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    UploadRoutingModule,
    NgxDropzoneModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [ UploadComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UploadModule { }
