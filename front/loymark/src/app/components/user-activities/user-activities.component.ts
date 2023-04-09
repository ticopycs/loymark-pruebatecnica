import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserActivity } from 'src/app/models/userActivities/userActivity.model';
import { UserActivityService } from 'src/app/services/usuarios/activitidades/userActivity.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  actividades : UserActivity[] = [];

  displayedColumns: string[] = ['fecha', 'nombreCompleto', 'detalle'];
  dataSource = new MatTableDataSource<UserActivity>(this.actividades);
  
  constructor(
    private _userActivityService: UserActivityService,
  ) { }

  ngOnInit(): void {
  }

  getActividades(){
    this._userActivityService.getAll().subscribe((response: any) => {
      this.actividades = [...response];
    },
    (error: any) => {
      console.log("Error de programas", error);
    });
  }

}
