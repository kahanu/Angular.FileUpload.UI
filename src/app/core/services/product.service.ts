import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { Product } from '../../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService extends HttpBase<Product> {

  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Products);
  }

}
