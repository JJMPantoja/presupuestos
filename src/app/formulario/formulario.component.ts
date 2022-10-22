import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo = 'ing';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoService,
              private egresoServicio: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento): any{
    this.tipo = evento.target.value;
  }

  agregarValor(): any{
    if (this.tipo === 'ing'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
