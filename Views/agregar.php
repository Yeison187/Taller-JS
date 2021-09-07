<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Agregar productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
</head>
<style >

</style>
<body>
    <br><br><br>
    <div class="container">
        <div class="row col-md-4">

            <div class="abs-center">
                <form id="agregarProducto" class="border p-3 form">
                    <center><h1>Agregar producto</h1></center>
                    <div class="form-group">
                      <label for="">Seleccione un producto</label>
                      <select class="form-select" id="producto" required>
                        <option value="televisor">Televisor</option>
                        <option value="nevera">Nevera</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="">Tipo de consumo</label>
                    <select class="form-select" id="consumo" required>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="">Procedencia</label>
                    <select class="form-select" id="procedencia" required> 
                        <option value="nacional">Nacional</option>
                        <option value="importado">Importado</option>
                        
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="">Cantidad</label>
                    <input  class="form-control" type="number" id="cantidad" required>
                </div>

                <br>
                <button type="submit"  class="btn btn-primary">Agregar producto</button>
                
            </form>

        </div>

        


        <div class="row col-md-4"> <h1>Mostrar inventario</h1>
            <button type="submit" id="mostrarTabla" class="btn btn-primary">Mostrar inventario</button>



            <table class="table">
             <thead >
                <tr>
                    <th>Producto</th>
                    <th>Consumo</th>
                    <th>Procedencia</th>
                    <th>Cantidad</th>
                    <th>TDT</th>
                    <th>Pulgadas</th>
                    <th>Capacidad litros</th>
                </tr>
            </thead>
            <tbody id="listar">
                
            </tbody>
        </table>
    </div>
<br><br>


</div>

<div class="row col-md-8">

<div class="abs-center">
    <form id="agregarCarrito" class="border p-3 form">
        <center><h1>Agregar carrito</h1></center>
        <div class="form-group">
          <label for="">Seleccione un producto</label>
          <select class="form-select" id="productoC" required>
            <option value="televisor">Televisor</option>
            <option value="nevera">Nevera</option>
            <option value="otros">Otros</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="">Tipo de consumo</label>
        <select class="form-select" id="consumoC" required>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="">Procedencia</label>
        <select class="form-select" id="procedenciaC" required> 
            <option value="nacional">Nacional</option>
            <option value="importado">Importado</option>
            
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="">Cantidad</label>
        <input  class="form-control" type="number" id="cantidadC" required>
    </div>

    <br>
    <button type="submit"  class="btn btn-primary">Agregar producto</button>
    
</form>

</div>

</div>
<table>

</table>


<script src="../controller/agregar.js"></script>
<script src="../model/DataBase.js"></script>


</body>

</html>