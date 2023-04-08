import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios/usuario.model';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  form! : FormGroup;
  submitted = false;
  paises = [
    { codigo: 'ATG', nombre: 'Antigua y Barbuda' },
    { codigo: 'ARG', nombre: 'Argentina' },
    { codigo: 'BHS', nombre: 'Bahamas' },
    { codigo: 'BRB', nombre: 'Barbados' },
    { codigo: 'BLZ', nombre: 'Belice' },
    { codigo: 'BOL', nombre: 'Bolivia' },
    { codigo: 'BRA', nombre: 'Brasil' },
    { codigo: 'CAN', nombre: 'Canadá' },
    { codigo: 'CHL', nombre: 'Chile' },
    { codigo: 'COL', nombre: 'Colombia' },
    { codigo: 'CRI', nombre: 'Costa Rica' },
    { codigo: 'CUB', nombre: 'Cuba' },
    { codigo: 'DMA', nombre: 'Dominica' },
    { codigo: 'DOM', nombre: 'República Dominicana' },
    { codigo: 'ECU', nombre: 'Ecuador' },
    { codigo: 'SLV', nombre: 'El Salvador' },
    { codigo: 'USA', nombre: 'Estados Unidos' },
    { codigo: 'GRD', nombre: 'Granada' },
    { codigo: 'GTM', nombre: 'Guatemala' },
    { codigo: 'GUY', nombre: 'Guyana' },
    { codigo: 'HTI', nombre: 'Haití' },
    { codigo: 'HND', nombre: 'Honduras' },
    { codigo: 'JAM', nombre: 'Jamaica' },
    { codigo: 'MEX', nombre: 'México' },
    { codigo: 'NIC', nombre: 'Nicaragua' },
    { codigo: 'PAN', nombre: 'Panamá' },
    { codigo: 'PRY', nombre: 'Paraguay' },
    { codigo: 'PER', nombre: 'Perú' },
    { codigo: 'PRI', nombre: 'Puerto Rico' },
    { codigo: 'KNA', nombre: 'San Cristóbal y Nieves' },
    { codigo: 'LCA', nombre: 'Santa Lucía' },
    { codigo: 'VCT', nombre: 'San Vicente y las Granadinas' },
    { codigo: 'SUR', nombre: 'Surinam' },
    { codigo: 'TTO', nombre: 'Trinidad y Tobago' },
    { codigo: 'URY', nombre: 'Uruguay' },
    { codigo: 'VEN', nombre: 'Venezuela' }
  ];


  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _alert: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      nombre: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\s]*')])],
      apellido: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\s]*')])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      fechaNacimiento: ["", Validators.required],
      telefono: ["", Validators.pattern('^[0-9]+$')],
      pais: ["", Validators.required],
      contacto: [false, Validators.required]
    })
  }

  register() {
    const user  = new Usuario; 
    
    user.id,
    user.nombre = this.form.value.nombre,
    user.apellido = this.form.value.apellido,
    user.email = this.form.value.email,
    user.fechaNacimiento = this.form.value.fechaNacimiento,
    user.telefono = this.form.value.telefono,
    user.pais = this.form.value.pais,
    user.contacto = this.form.value.contacto,
    user.insertedAt = new Date(),
    user.updatedAt = new Date()
    
    console.log(user);

    this._usuarioService.register(user).subscribe(r =>{
      this._alert.success("El usuario fue registrado exitosamente", "Usuario registrado", {
       positionClass: "toast-top-center"
      });
      this.router.navigate(['']);
     }, (error) => {
      this._alert.error("El usuario no pudo ser registrado. Intente nuevamente", "Error")
     });
     
  }

}