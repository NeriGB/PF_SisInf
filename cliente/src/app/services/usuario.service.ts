import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4000/api/login/';

  constructor(private http: HttpClient) { }

  iniciarSesion(id: string, usuario: Usuario): Observable<any> {
    return this.http.post(this.url + id, usuario);
  }
}
