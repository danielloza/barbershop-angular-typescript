import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Barbers } from './barbers';
import { BarbersService } from './barbers-service';

@Component({
  selector: 'app-form',
  templateUrl: './form-barber.component.html'
})
export class FormBarberComponent implements OnInit {

  barber: Barbers = new Barbers()
  barbers: Barbers[];

  constructor(private barbertoService: BarbersService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.cargarPaquete();
  }

    create(): void{
      this.barbertoService.create(this.barber)
      .subscribe(barber => {
        this.router.navigate(['/admin-barbers'])
          Swal.fire('Nuevo Barbero', `Barbero ${barber.nombre} creado con éxito!`, 'success')
        }
      )
    }

    cargarPaquete(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.barbertoService.getBarber(id).subscribe((barber) => this.barber = barber)
        }
      })
    }

    update(): void{
        this.barbertoService.update(this.barber).subscribe( barber => {
          this.router.navigate(['/admin-barbers'])
          Swal.fire('Barbero Actualizado', `Barbero ${barber.nombre} actualizado con éxito!`, 'success')
        })
      }

}
