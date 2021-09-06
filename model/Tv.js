class Tv extends Electrodomesticos {

   
    calcularPrecio( procedencia, consumo){
        this.precio = precioElectrodomesticos(procedencia,consumo);

            if(pulgadas > 40){
                this.precio = (this.precio * 0.3) + precio;
             }
            if(TDT){
               this.precio += 250000;
            }


            return this.precio;

        }

}
