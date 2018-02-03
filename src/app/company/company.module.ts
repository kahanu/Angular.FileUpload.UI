import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
