import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IBadRequestResponse,
  IErrorResponse,
  IOkResponse,
} from '../../dtos/response/response.dto';

@Injectable({
  providedIn: 'root',
})
export class PromisifyServiceUtil {
  async callService(
    service: () => Observable<
      IOkResponse | IBadRequestResponse | IErrorResponse
    >
  ): Promise<IOkResponse | IBadRequestResponse | IErrorResponse | any> {
    return await new Promise((resolve, reject) => {
      service().subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
