import { NgModule } from '@angular/core';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UploadRoutingModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
