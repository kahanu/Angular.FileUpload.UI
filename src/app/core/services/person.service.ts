import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';
import { UploadBaseService } from './upload-base.service';

@Injectable()
export class PersonService extends UploadBaseService<any> {
  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Person);
  }

}
