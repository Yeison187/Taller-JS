

var datos = [];
var carrito = [];

window.onload = eventos;
function eventos() {
    document.getElementById("agregarProducto").addEventListener("submit",agregarProducto,false);
    document.getElementById("mostrarTabla").addEventListener("click",mostarTabla,false);
    document.getElementById("agregarCarrito").addEventListener("submit",agregarCarrito,false);
    document.getElementById("mostrarFactura").addEventListener("click",mostarFactura,false);
    document.getElementById("pagar").addEventListener("click",calcularTotal,false);

    ocultarCampos();

}

function agregarProducto(event) {
   event.preventDefault();

   var producto = document.getElementById("producto").value;
   var consumo = document.getElementById("consumo").value;
   var procedencia = document.getElementById("procedencia").value;
   var cantidad = document.getElementById("cantidad").value;

   const base = new DataBase(producto,consumo,procedencia,30,"si",cantidad);
   base.set();
   var obj = base.get();
   datos.push(obj);
   existe();


}

function mostarTabla() {
    
    var cuerpoTabla = document.getElementById("listar");
    var tablaLlena = "";

    for(var i = 0; i < datos.length; i++){
        
     
       tablaLlena += "<tr><td><center>" + datos[i][0][0].producto +
       "</center></td><td><center>" + datos[i][0][0].tipoConsumo +
       "</center></td><td><center>" + datos[i][0][0].procedencia +
       "</center></td><td><center>" + datos[i][0][0].cantidad +
       "</center></td><td><center>" + datos[i][0][0].tdt +
       "</center></td><td><center>" + datos[i][0][0].pulgadas +
       "</center></td><td><center>" + datos[i][0][0].capacidad +"</center></td></tr>" ;
       
       
       
       

   }
   
   cuerpoTabla.innerHTML = tablaLlena;
}

function existe() {

    for(var i = 0; i < datos.length; i++){
        for(var j = i + 1; j < datos.length; j++){
            if(datos[i][0][0].producto == datos[j][0][0].producto && datos[i][0][0].tipoConsumo == datos[j][0][0].tipoConsumo
            && datos[i][0][0].procedencia == datos[j][0][0].procedencia 
            && datos[i][0][0].tdt == datos[j][0][0].tdt && datos[i][0][0].pulgadas == datos[j][0][0].pulgadas){
                
                datos[i][0][0].cantidad = parseInt(datos[i][0][0].cantidad) + parseInt(datos[j][0][0].cantidad);
                datos.splice(j);
            } else if(datos[i][0][0].producto == datos[j][0][0].producto && datos[i][0][0].tipoConsumo == datos[j][0][0].tipoConsumo
            && datos[i][0][0].procedencia == datos[j][0][0].procedencia && datos[i][0][0].capacidad == datos[j][0][0].capacidad){
                
                datos[i][0][0].cantidad = parseInt(datos[i][0][0].cantidad) + parseInt(datos[j][0][0].cantidad);
                datos.splice(j);
            }else  if(datos[i][0][0].producto == datos[j][0][0].producto && datos[i][0][0].tipoConsumo == datos[j][0][0].tipoConsumo
            && datos[i][0][0].procedencia == datos[j][0][0].procedencia){
                
                datos[i][0][0].cantidad = parseInt(datos[i][0][0].cantidad) + parseInt(datos[j][0][0].cantidad);
                datos.splice(j);
            }
        }
        
        
        

    }

    
}

function agregarCarrito(event) {

    event.preventDefault();
    var productoC = document.getElementById("productoC").value;
    var consumoC = document.getElementById("consumoC").value;
    var procedenciaC = document.getElementById("procedenciaC").value;
    var cantidadC = document.getElementById("cantidadC").value;
    
    const car = new DataBase(productoC,consumoC,procedenciaC,30,"si",cantidadC);
    car.set();
    var obje = car.get();
    carrito.push(obje);
  
    for(var i = 0; i < carrito.length; i++){
        for(var j = i + 1; j < carrito.length; j++){
            if(carrito[i][0][0].producto == carrito[j][0][0].producto && carrito[i][0][0].tipoConsumo == carrito[j][0][0].tipoConsumo
            && carrito[i][0][0].procedencia == carrito[j][0][0].procedencia 
            && carrito[i][0][0].tdt == carrito[j][0][0].tdt && carrito[i][0][0].pulgadas == carrito[j][0][0].pulgadas){
                
                carrito[i][0][0].cantidad = parseInt(carrito[i][0][0].cantidad) + parseInt(carrito[j][0][0].cantidad);
                carrito.splice(j);
            } else if(carrito[i][0][0].producto == carrito[j][0][0].producto && carrito[i][0][0].tipoConsumo == carrito[j][0][0].tipoConsumo
            && carrito[i][0][0].procedencia == carrito[j][0][0].procedencia && carrito[i][0][0].capacidad == carrito[j][0][0].capacidad){
                
                carrito[i][0][0].cantidad = parseInt(carrito[i][0][0].cantidad) + parseInt(carrito[j][0][0].cantidad);
                carrito.splice(j);
            }else  if(carrito[i][0][0].producto == carrito[j][0][0].producto && carrito[i][0][0].tipoConsumo == carrito[j][0][0].tipoConsumo
            && carrito[i][0][0].procedencia == carrito[j][0][0].procedencia){
                
                carrito[i][0][0].cantidad = parseInt(carrito[i][0][0].cantidad) + parseInt(carrito[j][0][0].cantidad);
                carrito.splice(j);
            }
        }
    
 
    }
}

function mostarFactura() {
    
    var cuerpoTabla = document.getElementById("listarFactura");
    var tablaLlena = "";

    for(var i = 0; i < carrito.length; i++){

       tablaLlena += "<tr><td><center>" + carrito[i][0][0].producto +
       "</center></td><td><center>" + carrito[i][0][0].tipoConsumo +
       "</center></td><td><center>" + carrito[i][0][0].procedencia +
       "</center></td><td><center>" + carrito[i][0][0].cantidad +
       "</center></td><td><center>" + carrito[i][0][0].tdt +
       "</center></td><td><center>" + carrito[i][0][0].pulgadas +
       "</center></td><td><center>" + carrito[i][0][0].capacidad +"</center></td></tr>" ;    
 
   }
   
   cuerpoTabla.innerHTML = tablaLlena;
}

function calcularTotal() { 
  
    for(var i = 0; i < carrito.length; i++){
        var totalPagar = 0;
       
        if(carrito[i][0][0].producto == "televisor"){
            
            var total = new Tv ();
            console.log(total.calcularPrecio(carrito[i][0][0].pulgadas,carrito[i][0][0].tdt,carrito[i][0][0].procedencia,carrito[i][0][0].tipoConsumo));
            totalPagar = (parseFloat(total.calcularPrecio()) * carrito[i][0][0].cantidad) + parseFloat(totalPagar);
          
        }else if(carrito[i][0][0].producto == "nevera"){
            var totalNevera = new Nevera (carrito[i][0][0].capacidad,carrito[i][0][0].procedencia,carrito[i][0][0].tipoConsumo);
            totalPagar = (parseFloat(totalNevera.calcularPrecio()) * carrito[i][0][0].cantidad) + parseFloat(totalPagar);
          
        }else if(carrito[i][0][0].producto == "otros"){
            var total = new Electrodomesticos ();
           totalPagar = (parseFloat(total.precioElectrodomesticos(carrito[i][0][0].procedencia,
            carrito[i][0][0].tipoConsumo)) * carrito[i][0][0].cantidad) + parseFloat(totalPagar);
           
        }
  
    }

    alert("Total a pagar " + totalPagar);
    
}

function ocultarCampos() {
    var product = document.getElementById("producto").value;
    if (product == "nevera" || product == "otros") {
        document.getElementById("ocultar").style.display = "none";  
    } else {
        document.getElementById("ocultar").style.display = "block";  
    }console.log(product);
}