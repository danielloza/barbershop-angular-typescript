import { Component, OnInit } from '@angular/core';
import { Package } from '../admin-packages/package';
import { PackageService } from '../admin-packages/package-service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  [x: string]: any;

  paquete: Package = new Package()
  paquetes: Package[];

  constructor(private packagetoService: PackageService) { }

  ngOnInit(): void {
    this.packagetoService.getPackages().subscribe(
      (paquetes) => this.paquetes = paquetes
    );
    this.cargarPaquete();
  }

  cargarPaquete(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.packagetoService.getPaquete(id).subscribe((paquete) => this.paquete = paquete)
      }
    })
  }




}
