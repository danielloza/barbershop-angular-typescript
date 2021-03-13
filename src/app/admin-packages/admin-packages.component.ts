import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Package } from './package';
import { PackageService } from './package-service';

@Component({
  selector: 'app-admin-packages',
  templateUrl: './admin-packages.component.html'
})
export class AdminPackagesComponent implements OnInit {

  paquete: Package = new Package()
  paquetes: Package[];

  constructor(private packagetoService: PackageService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.packagetoService.getPackages().subscribe(
      (paquetes) => this.paquetes = paquetes
    );
    this.cargarPaquete();
  }

  delete(paquete: Package): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el producto ${paquete.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.packagetoService.delete(paquete.id).subscribe(
          response => {
            this.paquetes = this.paquetes.filter( prod => prod !== paquete)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `Producto ${paquete.nombre} eliminado con éxito!`,
              'success'
            )
          }
        )

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Operación cancelada',
          'error'
        )
      }
    })
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
        this.router.navigate(['/agregarProd'])
        Swal.fire('Producto Actualizado', `Producto ${paquete.nombre} actualizado con éxito!`, 'success')
      })
    }

}
