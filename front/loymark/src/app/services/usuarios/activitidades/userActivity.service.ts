import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'ng-base-service';
import { map } from 'rxjs';
import { UserActivity } from 'src/app/models/userActivities/userActivity.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService extends BaseService<UserActivity>{
  private readonly controller = 'Usuarios';
  apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { 
      super(http, "Usuario")
  }

    public override getAll(): any {
      let url: string = `${this.apiUrl+this.controller}/getAllOrder`;
      return this.http.get(url).pipe(
        map((response) => {
          return response
        })
      )
    }

}
