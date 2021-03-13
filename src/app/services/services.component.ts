import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../admin-packages/package';
import { PackageService } from '../admin-packages/package-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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

  cargarPaquete(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.packagetoService.getPaquete(id).subscribe((paquete) => this.paquete = paquete)
      }
    })
  }




}
