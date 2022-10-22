import { Egreso } from './egreso.model';

export class EgresoService{
    egresos: Egreso[] = [
        new Egreso('Renta Departamento', 900),
        new Egreso('Ropa', 200)

    ];

    eliminarEgreso(egreso: Egreso): any{
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);

    }
}