 class DataBase {
    
   db = [];
    constructor(producto,consumo,procedencia,tamano,tdt,cantidad){
        this.producto = producto;
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.tamano = tamano;
        this.tdt = tdt;
        this.cantidad = cantidad;
    }

  get(){
    return this.db;
  }
  set(){
     
     switch (this.producto) {
         case "televisor":
            var tv = [{producto: this.producto, tipoConsumo: this.consumo,
                    procedencia: this.procedencia,pulgadas: this.tamano,
                    tdt: this.tdt, cantidad: this.cantidad}];

                    this.db.push(tv);
             break;
         case "televisor":
            var neveras = [{producto: this.producto,consumo: this.consumo,
                        procedencia: this.procedencia, capacidad: this.tamano,
                        cantidad: this.cantidad}];
                        this.db.push(neveras);
             break;
         case "otros":
            var otros = [{producto: this.producto,consumo: this.consumo,
                    procedencia: this.procedencia, cantidad: this.cantidad}];
                    this.db.push(otros);
          break;     
         default:
             break;
     }
      
  }

}

