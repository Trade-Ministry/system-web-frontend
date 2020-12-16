import { NgModule } from '@angular/core';

import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  imports: [
    UploadRoutingModule
  ],
  declarations: [ UploadComponent ]
})
export class UploadModule { }
