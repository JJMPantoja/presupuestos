import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;

  constructor() { }

  ngOnInit(): void {}

  calcularPorcentaje(): any{
    return this.egresoTotal / this.ingresoTotal ;
  }

}
