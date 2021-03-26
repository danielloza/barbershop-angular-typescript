import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Appointments } from '../appointments/appointments';
import { AppointmentsService } from '../appointments/appointments-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  appointment: Appointments = new Appointments()
  appointments: Appointments[];

  constructor(private appointmenttoService: AppointmentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.appointmenttoService.getAppointments().subscribe(
      (appointments) => this.appointments = appointments
    );
    this.cargarCita();

  }

  cargarCita(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.appointmenttoService.getAppointment(id).subscribe((appointment) => this.appointment = appointment)
      }
    })
  }

  update(): void{
      this.appointmenttoService.update(this.appointment).subscribe( appointment => {
        this.router.navigate(['/admin'])
        Swal.fire('Cita Actualizada', `Barbero ${appointment.barbero} actualizado con éxito!`, 'success')
      })
    }

  delete(appointment: Appointments): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar la cita con el barbero ${appointment.barbero} con día ${appointment.fechaHora}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.appointmenttoService.delete(appointment.id).subscribe(
          response => {
            this.appointments = this.appointments.filter( prod => prod !== appointment)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `Cita con el Barbero ${appointment.barbero} con día ${appointment.fechaHora} eliminada con éxito!`,
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

  realizada(appointment: Appointments): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas cambiar el estatus a "Realizada" de la cita con día ${appointment.fechaHora}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Cambiar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.appointmenttoService.delete(appointment.id).subscribe(
          response => {
            this.appointments = this.appointments.filter( prod => prod !== appointment)
            swalWithBootstrapButtons.fire(
              'Cambiada!',
              `Estatus de la Cita con día ${appointment.fechaHora} fue cambiado con éxito!`,
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
