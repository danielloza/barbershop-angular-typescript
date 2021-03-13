import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  habilitar: boolean = true;
  desahabilitar: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.setDesabilitar();
    this.habilitar = true;
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false: true;
    this.desahabilitar = false;
  }

  setDesabilitar(): void{
    this.desahabilitar = (this.desahabilitar == false) ? true: false;
    this.habilitar = false;
    //this.setHabilitar();
  }

}
