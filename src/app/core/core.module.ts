import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { commonformgroups, services } from './core-declarations.lib';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...commonformgroups,
    ...services
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
