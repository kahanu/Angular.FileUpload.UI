import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * This interceptor will remove the 'Content-Type' header which is needed
 * to make the Upload form-data request work.
 */
@Injectable()
export class UploadInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let uploadClonedRequest = req;

    if (req.params.has('upload')) {
      uploadClonedRequest = req.clone({
        headers: req.headers.delete('Content-Type')
      });
    }
    return next.handle(uploadClonedRequest);
  }

}
