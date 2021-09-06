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
        <div class="row col-md-8">

            <div class="abs-center">
                <form id="agregarProducto" class="border p-3 form">
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
                    <label for="">Cantidas</label>
                    <input  class="form-control" type="number" id="cantidad">
                </div>

               <br>
                <button type="submit" class="btn btn-primary">Agregar producto</button>
            </form>

        </div>


    </div>

</div>


<script src="../controller/agregar.js"></script>
<script src="../model/DataBase.js"></script>


</body>

</html>