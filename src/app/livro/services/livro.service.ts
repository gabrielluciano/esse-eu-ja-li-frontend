import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Livro } from 'src/app/models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = '/api/livros';

  constructor(private http: HttpClient) { }

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API).pipe(first());
  }

  pesquisar(id: number): Observable<Livro> {
    return this.http.get<Livro>(this.API + '/' + id).pipe(first());
  }

}
