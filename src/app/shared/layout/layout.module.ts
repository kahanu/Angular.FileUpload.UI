import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavComponent } from './navigation/primary-nav/primary-nav.component';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [PrimaryNavComponent, MainLayoutComponent],
  exports: [
    HeaderModule
  ]
})
export class LayoutModule { }
