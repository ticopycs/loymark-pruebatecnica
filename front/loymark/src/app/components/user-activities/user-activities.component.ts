import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserActivityDTO } from 'src/app/models/userActivities/userActDTO';
import { UserActivity } from 'src/app/models/userActivities/userActivity.model';
import { UserActivityService } from 'src/app/services/usuarios/activitidades/userActivity.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  actividades : UserActivityDTO[] = [];

  displayedColumns = [
    { prop: 'nombre', name: 'Nombre' },
    { prop: 'fechaCreacion', name: 'Fecha Creacion' },
    { prop: 'actividad', name: 'Detalle de actividad' }];
    
  constructor(
    private _userActivityService: UserActivityService,
  ) { }

  ngOnInit(): void {
    this.getActividades();
  }

  getActividades(){
    this._userActivityService.getAll().subscribe((response: any) => {
      this.actividades = [...response];
      console.log(this.actividades);
      
    },
    (error: any) => {
      console.log("Error de actividades", error)
      return error;
    });
  }

}
