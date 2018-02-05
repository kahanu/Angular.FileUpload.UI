import { NgModule } from '@angular/core';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PersonRoutingModule
  ],
  declarations: [PersonComponent]
})
export class PersonModule { }
