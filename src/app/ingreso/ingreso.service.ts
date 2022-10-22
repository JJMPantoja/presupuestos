import { Ingreso } from './ingreso.model';

export class IngresoService{
    ingresos: Ingreso[] = [
        new Ingreso('Salario', 4000),
        new Ingreso('Venta Coche', 500)
    ];


    eliminar(ingreso: Ingreso): any{
        const indice: number = this.ingresos.indexOf(ingreso);
        console.log(indice);
    // En los parametros de splice se ingresa el indice que se quiere eliminar y el segundo
    // indica el numero de elementos que se deben de eliminar
        this.ingresos.splice(indice, 1);
    }
}