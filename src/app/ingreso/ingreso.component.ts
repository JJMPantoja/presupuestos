import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  ingresos: Ingreso[] = [];

  constructor(private ingresoServicio: IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso): any{
    console.log(ingreso);
    this.ingresoServicio.eliminar(ingreso);
  }

}
