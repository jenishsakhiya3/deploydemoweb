import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

export interface ResponseModel<T> {
  success: any;
  result: boolean;
  statusCode: number;
  message: string;
  data: T;
}


const ROOT_API: string = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpGet<T>(path: string, param?: HttpParams) {
    return this.http.get<ResponseModel<T>>(ROOT_API + path, { params: param});
  }

  httpGetBlob(path: string) {
    return this.http.get(ROOT_API + path, { responseType: 'blob' });
  }

  httpGetText(path: string) {
    return this.http.get(ROOT_API + path, { responseType: 'text' });
  }

  httpPost<T>(path: string, body: object) {
    return this.http.post<ResponseModel<T>>(ROOT_API + path, body);
  }

  httpPatch<T>(path: string, body: object) {
    return this.http.patch<ResponseModel<T>>(ROOT_API + path, body);
  }

  httpDelete<T>(path: string) {
    return this.http.delete<ResponseModel<T>>(ROOT_API + path);
  }
}
