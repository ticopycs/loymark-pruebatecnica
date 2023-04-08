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
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _alert: ToastrService,
    private _router: RouterModule,
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
      contacto: ["", Validators.required]
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
    user.pais = this.paisCode(this.form.value.pais),
    user.contacto = this.form.value.contacto,
    user.insertedAt = new Date(),
    user.updatedAt = new Date()
    
    this.loading = true;
    this._usuarioService.register(user).subscribe(r =>{
      this._alert.success("El usuario fue registrado exitosamente", "Usuario registrado", {
       positionClass: "toast-top-center"
      });
      this.router.navigate(['']);
     }, (error) => {
      this._alert.error("El usuario no pudo ser registrado. Intente nuevamente", "Error")
     });
     
  }

  paisCode(pais: String): String{

    var codInternacional: String = ""

    return codInternacional
  }
}