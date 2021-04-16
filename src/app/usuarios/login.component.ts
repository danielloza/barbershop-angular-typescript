import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';



//const userKeys = 'angular-10-registration';
//let users = JSON.parse(localStorage.getItem(userKeys)) || [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  [x: string]: any;

  titulo: string = 'Por favor Sign In!';
  public usuario: Usuario = new Usuario();


  constructor(private logintoService: LoginService,  private router: Router, private activateRoute: ActivatedRoute) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {

  }

  login(): void{
    this.logintoService.getLogin(this.usuario)
      .subscribe((usuario) => this.usuario = usuario)

      if(this.usuario.username == null && this.usuario.password == null){
            Swal.fire('Error', 'Usuario o contraseña vacías', 'error')
            this.router.navigate(['/login'])
            return;
        }else{
          this.router.navigate(['/admin'])
          return;

    }
  }

    /*login(): void{
      const user = users.find(x => x.username === this.usuario.username && x.password === this.usuario.password);
      if(!user){
        if(this.usuario.username == null && this.usuario.password == null){
              Swal.fire('Error', 'Usuario o contraseña incorrecta', 'error')
              this.router.navigate(['/login'])
              return;
          }
        }else{
      this.logintoService.getLogin(this.usuario)
        .subscribe((usuario) => this.usuario = usuario)

            this.router.navigate(['/admin'])
            return;

      }
    }*/

}
