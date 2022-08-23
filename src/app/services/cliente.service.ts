import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = '/api/clientes';

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API).pipe(first());
  }

  pesquisar(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.API + '/' + id).pipe(first());
  }

  adicionarLivro(idCliente: number, idLivro: number): Observable<boolean> {
    return this.http.post<boolean>(this.API + '/addlivro', { idCliente, idLivro })
      .pipe(first());
  }

}
