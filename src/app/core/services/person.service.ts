import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExceptionService } from './common/exception.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class PersonService extends HttpBase<any> {
  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, environment.Api.Person);
  }

  /**
   * The custom method for the Upload form.  This needs to be handled differently
   * from the standard CRUD operations of the HttpBase class, because the payload
   * should not be stringified.  Also Http parameters should be set here for the
   * interceptor.
   * @param data The form-data
   */
  upload(data: any, path: string = '') {
    // this.url is from the base class.
    const Url = this.url.concat(path);

    /**
     * You can't JSON stringify the data for form-data requests.
     */
    // const payload = JSON.stringify(data);
    const payload = data;

    /**
     * Setting an Http Parameter that sets an 'upload' key which will
     * be read by the UploadInterceptor to remove the Content-Type header.
     * The thought is to only set this parameter for upload service methods.
     * This way the interceptors will be called properly.
     */
    const params = {
      params: new HttpParams().set('upload', 'true')
    };

    return this.http
      .post(Url, payload, params)
      .catch(this.exceptionService.catchBadResponse);
  }
}
