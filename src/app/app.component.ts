import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  // Inyectamos una dependencia tanto de ingresos como de egresos
  constructor(private ingresoServicio: IngresoService,
              private egresoServicio: EgresoService) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

// Se suman todos lo ingresos que se tienes en el arreglo de ingresos
  getIngresoTotal(): any {
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  // Se suman todos lo egresos que se tienes en el arreglo de egresos
  getEgresoTotal(): any {
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPresupuestoTotal(): any {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
