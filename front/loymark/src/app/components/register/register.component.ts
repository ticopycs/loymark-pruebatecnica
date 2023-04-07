import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios/usuario.model';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form! : FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _datePipe: DatePipe,
    private _usuarioService: UsuarioService,
    private _alert: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      nombre: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\s]*')])],
      apellido: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\s]*')])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      fechaNacimiento: ["", Validators.required],
      telefono: ["", Validators.pattern('^[0-9]+$')],
      pais: ["", Validators.required],
      contacto: ["", Validators.required]
    })
  }

  register() {
    const USER : Usuario = {
      id: '',
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      email: this.form.value.email,
      fechaNacimiento: this.form.value.fechaNacimiento,
      telefono: this.form.value.telefono,
      pais: this.paisCode(this.form.value.pais),
      contacto: this.form.value.contacto,
      insertedAt: new Date(),
      updatedAt: new Date()
    }
    this._usuarioService.register(USER).subscribe(() =>{
      this._alert.('El empleado fue registrado exitosamente', 'Empleado registrado', {
       positionClass: 'toast-top-center'
      });
      this.router.navigate(['list-empleados']);
     }).catch(error => {
       console.log(error);
       this.loading = false
     })
  }

  paisCode(pais: String): String{

    var codInternacional: String = ""

    return codInternacional
  }
}