import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    UploadRoutingModule,
    NgxDropzoneModule,
    CommonModule
  ],
  declarations: [ UploadComponent ]
})
export class UploadModule { }
