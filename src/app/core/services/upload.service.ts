import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { HttpClient } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UploadService extends HttpBase<any> {

  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Upload);
  }

}
