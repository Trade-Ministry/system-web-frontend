import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    UploadRoutingModule,
    NgxDropzoneModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [ UploadComponent ]
})
export class UploadModule { }
