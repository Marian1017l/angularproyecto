import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit{
  data: any[]= [];
  constructor(private httpClient: HttpClient, private router: Router) {}
  usuarioEliminar = new FormGroup({
    identificacionEliminar: new FormControl('',Validators.required)
  })
  eliminarUsuario():void{
    this.httpClient.delete('http://localhost:4567/usuarios/'+this.usuarioEliminar.value.identificacionEliminar).subscribe(
      (response) => {
        console.log('Usuario eliminado exitosamente:', response);
      })
    this.fetchData()
  }
  ngOnInit(): void {
    this.fetchData()
    this.data.forEach(obj=>{
      console.log(obj);
    })
    
 }
 fetchData() {
  this.httpClient.get<any>('http://localhost:4567/usuarios').subscribe(
    (response) => {
      if (response.message === 'ok') {
        this.data = response.data;
      } else {
        console.error('Error al obtener datos:', response.message);
      }
    },
    (error) => {
      console.error('Error en la solicitud HTTP:', error);
    }
  );
}
  nuevoUsuario = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    Identificacion: new FormControl('', Validators.required),
    Apellidos: new FormControl('', Validators.required),
    Contraseña: new FormControl('', Validators.required),
    Perfil: new FormControl('', Validators.required),
  })
  crearNuevoUsuario():void{
    this.httpClient.post('http://localhost:4567/usuarios',{
      "nombres": this.nuevoUsuario.value.Nombres,
      "apellidos": this.nuevoUsuario.value.Apellidos,
      "password": this.nuevoUsuario.value.Contraseña,
      "perfil": this.nuevoUsuario.value.Perfil,
      "identificacion": this.nuevoUsuario.value.Identificacion
    }).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
      })
      this.fetchData()
  }
  usuarioEditado = new FormGroup({
    NombresEditar: new FormControl('', Validators.required),
    IdentificacionEditar: new FormControl('', Validators.required),
    ApellidosEditar: new FormControl('', Validators.required),
    ContraseñaEditar: new FormControl('', Validators.required),
    PerfilEditar: new FormControl('', Validators.required),
  })
  editarUsuario():void{
    this.usuarioEditado.value.PerfilEditar
    this.httpClient.put('http://localhost:4567/usuarios/'+this.usuarioEditado.value.IdentificacionEditar,{
      "nombres": this.usuarioEditado.value.NombresEditar,
      "apellidos": this.usuarioEditado.value.ApellidosEditar,
      "password": this.usuarioEditado.value.ContraseñaEditar,
      "perfil": this.usuarioEditado.value.PerfilEditar,
      "identificacion": this.usuarioEditado.value.IdentificacionEditar
    }).subscribe(
      (response) => {
        console.log('Usuario Actualizado exitosamente:', response);
      })
      this.fetchData()
  }
}
