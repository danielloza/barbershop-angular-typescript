import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Barbers } from './barbers';
import { BarbersService } from './barbers-service';

@Component({
  selector: 'app-admin-barbers',
  templateUrl: './admin-barbers.component.html'
})
export class AdminBarbersComponent implements OnInit {

  barber: Barbers = new Barbers()
  barbers: Barbers[];

  constructor(private barbertoService: BarbersService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.barbertoService.getBarbers().subscribe(
      (barbers) => this.barbers = barbers
    );
    //this.cargarPaquete();
  }

  delete(barber: Barbers): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el barbero ${barber.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.barbertoService.delete(barber.id).subscribe(
          response => {
            this.barbers = this.barbers.filter( prod => prod !== barber)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `Barbero ${barber.nombre} eliminado con éxito!`,
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

}
