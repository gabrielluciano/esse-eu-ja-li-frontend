import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = '/api/clientes/auth';

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: Partial<Cliente>): Observable<number> {
    return this.http.post<number>(this.API, loginData)
      .pipe(first(), tap(console.log));
  }
}
