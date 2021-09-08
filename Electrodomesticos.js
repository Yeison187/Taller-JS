
 class Electrodomesticos {
      
     constructor(){  
     }

    precioElectrodomesticos(procedencia, consumo) {
 
        var total = 0;
        var impuesto;
        if (procedencia == "nacional") {
            impuesto = 250000;
        } else {
            impuesto = 350000;
        }

        switch (consumo) {
               
            case "a": 
                this.total = 450000 + impuesto;
                break;

            case "b":
                this.total = 350000 + impuesto;
                break;

            case "c":
                this.total = 250000 + impuesto;
                break;
        }

        return this.total;
    }

}
