 class Tv extends Electrodomesticos {

    constructor(){
      super();
    }

   
    calcularPrecio(pulgadas,TDT,procedencia,consumo){
        this.precio = super.precioElectrodomesticos(procedencia,consumo);
        
            if(pulgadas > 40){
                this.precio = (this.precio * 0.3) + this.precio;
             }
            if(TDT){
               this.precio += 250000;
            }


            return this.precio;

        }

}


