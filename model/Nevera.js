 class Fridge extends Electrodomesticos{



    calcularPrecio(procedencia,consumo){
        this.total = precioElectrodomesticos(procedencia,consumo);
        if (this.capacidad > 120){
            this.capacidad -= 120;
            this.capacidad = this.capacidad / 10;
            this.total = this.total + (( this.total * 0.05 ) * this.capacidad);
        }
        return this.total;
    }
}
