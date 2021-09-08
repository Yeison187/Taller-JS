
class Nevera extends Electrodomesticos{

    constructor(capacidad,procedencia,consumo){
        super();
        this.capacidad = capacidad;
        this.procedencia = procedencia;
        this.consumo = consumo;
 }

    calcularPrecio(){
        this.total = precioElectrodomesticos(this.procedencia,this.consumo);
        if (this.capacidad > 120){
            this.capacidad -= 120;
            this.capacidad = this.capacidad / 10;
            this.total = this.total + (( this.total * 0.05 ) * this.capacidad);
        }
        return this.total;
    }
}
