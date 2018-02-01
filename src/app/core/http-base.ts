import { Observable } from 'rxjs/Observable';
import { ExceptionService } from './services/common/exception.service';
import { Entity, ResponseBase } from './../shared/models/base';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';


export abstract class HttpBase<T extends Entity | any> {
  public url: string;

  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService,
    protected baseUrl: string) {
    this.url = baseUrl;
  }

  /**
   * Get all as the strongly-typed response of type T.
   * @param path the path to the resource
   */
  getAll(path: string): Observable<ResponseBase> {
    const Url = this.url.concat(path);

    return this.http.get<ResponseBase>(Url)
      .catch(this.exceptionService.catchBadResponse);
  }

  /**
   * Get a single item as a strongly-typed response of type T.
   * @param id the id to the resource
   * @param path the path to the resource
   */
  getById(id: any, path: string): Observable<any> {
    let Url = this.url.concat(path);
    Url = this.stripTrailingSlash(Url);

    return this.http.get(`${Url}/${id}`)
      .catch(this.exceptionService.catchBadResponse);
  }

  /**
   * The strongly-typed response of the delete of type T.
   * @param entity the entity to delete
   * @param path the path to the resource
   */
  delete(entity: T, path: string) {
    let Url = this.url.concat(path);
    Url = this.stripTrailingSlash(Url);

    const id = entity.id;

    return this.http.delete<T>(`${Url}/${id}`)
      .catch(this.exceptionService.catchBadResponse);
  }

  /**
   * Save any type and return a response of any type.
   * @param data the data to save of any type
   * @param path the path to the resource
   */
  save(data: any, path: string) {
    const Url = this.url.concat(path);

    const payload = JSON.stringify(data);

    return this.http.post(Url, payload)
      .catch(this.exceptionService.catchBadResponse);
  }

  private stripTrailingSlash(url: string): string {
    let newUrl = url;
    const pos = url.lastIndexOf('/');

    if (pos === (url.length - 1)) {
      newUrl = url.substr(0, url.length - 1);
    }

    return newUrl;
  }
}
