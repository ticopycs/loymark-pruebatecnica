import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'ng-base-service';
import { map } from 'rxjs';
import { Usuario } from 'src/app/models/usuarios/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<Usuario>{
  private readonly controller = 'Usuarios';
  apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { 
      super(http, "Usuario")
    }

    register(user: Usuario) {
      let url: string = `${this.apiUrl+this.controller}/register`;
      return this.http.post(url, user).pipe(
        map((response) => {
          return response;
        })
      );
  }
}
