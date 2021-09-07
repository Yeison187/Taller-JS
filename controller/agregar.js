var datos = [];
var carrito = [];

window.onload = eventos;
function eventos() {
    document.getElementById("agregarProducto").addEventListener("submit",agregarProducto,false);
    document.getElementById("mostrarTabla").addEventListener("click",mostarTabla,false);
    document.getElementById("agregarCarrito").addEventListener("submit",agregarProducto,false);

}

function agregarProducto(event) {
   event.preventDefault();

   var producto = document.getElementById("producto").value;
   var consumo = document.getElementById("consumo").value;
   var procedencia = document.getElementById("procedencia").value;
   var cantidad = document.getElementById("cantidad").value;
   const base = new DataBase(producto,consumo,procedencia,30,"si",cantidad);

   var productoC = document.getElementById("productoC").value;
   var consumoC = document.getElementById("consumoC").value;
   var procedenciaC = document.getElementById("procedenciaC").value;
   var cantidadC = document.getElementById("cantidadC").value;
   
   const car = new DataBase(producto,consumo,procedencia,30,"si",cantidad);
   
   
   
   var obje = car.get();
   carrito.push(obje);
   console.log(carrito);
   
   
   
   

   
   base.set();
   var obj = base.get();
   datos.push(obj);
   console.log(datos);

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

function agregarCarrito() {
 

 
  
}