import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Barbers } from '../admin-barbers/barbers';
import { BarbersService } from '../admin-barbers/barbers-service';
import { Package } from '../admin-packages/package';
import { PackageService } from '../admin-packages/package-service';
import { Appointments } from './appointments';
import { AppointmentsService } from './appointments-service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {

  paquete: Package = new Package()
  paquetes: Package[];
  barber: Barbers = new Barbers()
  barbers: Barbers[];
  BarberSelected: Number;
  appointment: Appointments = new Appointments()
  appointments: Appointments[];


  constructor(private packagetoService: PackageService, private barbertoService: BarbersService,
     private appointmenttoService: AppointmentsService, private router: Router, private activatedRoute: ActivatedRoute) {

      }

  ngOnInit(): void {
    this.packagetoService.getPackages().subscribe(
      (paquetes) => this.paquetes = paquetes
    );
    this.cargarPaquete();

    this.barbertoService.getBarbers().subscribe(
      (barbers) => this.barbers = barbers
    );
    this.cargarBarberos();

  }


  create(): void{

    this.appointmenttoService.create(this.appointment)
    .subscribe(appointment => {
      this.router.navigate(['/appointments'])
        Swal.fire('Agendaste Nueva Cita con el ', `Barbero ${appointment.barbero}, si decides cancelar
         comunicate con el Administrador!`, 'success')
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

  cargarBarberos(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.barbertoService.getBarber(id).subscribe((barber) => this.barber = barber)
      }
    })
  }




}
