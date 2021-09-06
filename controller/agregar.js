

window.onload = eventos;
function eventos() {
    document.getElementById("agregarProducto").addEventListener("submit",agregarProducto,false);
}

function agregarProducto(event) {
  var producto = document.getElementById("producto").value;
  var consumo = document.getElementById("consumo").value;
  var procedencia = document.getElementById("procedencia").value;
  
  const base = new DataBase(producto,consumo,procedencia,30,"si",40);

 base.set();
 var obj = base.get();
 console.log(obj);

}

