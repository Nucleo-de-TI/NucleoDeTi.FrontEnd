import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class PartnersService {
  constructor(private http: HttpClient) {}

  sendEmail(
    email: string,
    mensagem: string
  ): Observable<IOkResponse | IBadRequestResponse | IErrorResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<
      IOkResponse |
      IBadRequestResponse |
      IErrorResponse
    >(
      'https://app.nucleotiuniso.com.br/partners/send-mail',
      { email, mensagem },
      { headers }
    );
  }
}
