import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptorService } from './core/interceptors/http-request-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './shared/layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import { UploadInterceptorService } from './core/interceptors/upload-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
