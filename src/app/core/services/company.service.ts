import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { Company } from '../../shared/models/entities/company';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';
import { UploadBaseService } from './upload-base.service';

@Injectable()
export class CompanyService extends UploadBaseService<Company> {

  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Company);
  }

}
