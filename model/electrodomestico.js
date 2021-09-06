 export class Electrodomesticos {

   

    precioElectrodomesticos(procedencia, consumo) {
        var total = 0;
        var impuesto;
        if (procedencia == "Nacional") {
            impuesto = 250000;
        } else {
            impuesto = 350000;
        }

        switch (consumo) {

            case "A":
                total = 450000 + impuesto;
                break;

            case "B":
                total = 350000 + impuesto;
                break;

            case "C":
                total = 250000 + impuesto;
                break;
        }

        return total;
    }

}
