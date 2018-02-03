import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Another-Header': 'test/header'
      }
      // withCredentials: true
    });
    console.log('cloned request: ', clonedRequest);

    return next.handle(clonedRequest);
  }
}
