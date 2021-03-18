import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Package } from './package';
import { PackageService } from './package-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  paquete: Package = new Package()
  paquetes: Package[];

  constructor(private packagetoService: PackageService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPaquete();
  }

  create(): void{
    this.packagetoService.create(this.paquete)
    .subscribe(paquete => {
      this.router.navigate(['/admin-packages'])
        Swal.fire('Nuevo paquete', `Paquete ${paquete.nombre} creado con éxito!`, 'success')
      }
    )
  }

  cargarPaquete(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.packagetoService.getPaquete(id).subscribe((paquete) => this.paquete = paquete)
      }
    })
  }

  update(): void{
      this.packagetoService.update(this.paquete).subscribe( paquete => {
        this.router.navigate(['/admin-packages'])
        Swal.fire('Producto Actualizado', `Producto ${paquete.nombre} actualizado con éxito!`, 'success')
      })
    }



}
