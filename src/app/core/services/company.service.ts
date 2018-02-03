import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { Company } from '../../shared/models/entities/company';
import { HttpClient } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService extends HttpBase<Company> {

  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Company);
  }

}
