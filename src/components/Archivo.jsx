import { useState } from "react";
import Papa from "papaparse";

function Archivo() {
  // Instancio useState 4 veces, para los datos del csv, para el nombre de las columnas,
  // Los valores de la tabla y un titilo a desplegarse
  const [parsedData, setParsedData] = useState([null]);

  const [tableRows, setTableRows] = useState([]);

  const [values, setValues] = useState([]);

  const [titulo, setTitulo] = useState(null);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // Se crean dos array vacíos que contendrán las filas y los valores
        const rowsArray = [];
        const valuesArray = [];
        // Guardo en una variable los resultados
        var datos = results.data;
        // Agrego una columna llamada cantidad que tendrá por defecto un valor 1
        datos.forEach((object) => {
          object.cantidad = 1;
        });
        console.log(datos);
        // Se crea un objeto que se utilizará como auxiliar para la tabla a desplegar
        var holder = {};
        // Recorro datos, consulto si holder contiene la llave "pais", si no existe la agrego y tomo como valor cantidad
        // si ya existe, sumo uno a cantidad para esa llave (cantidad siempre vale 1 en datos)
        datos.forEach(function (datos) {
          if (holder.hasOwnProperty(datos.pais)) {
            holder[datos.pais] = holder[datos.pais] + datos.cantidad;
          } else {
            holder[datos.pais] = datos.cantidad;
          }
        });
        // Creo un array vacío llamado tabla
        var tabla = [];
        // Recorro holder, y añado objetos a tabla con las clave - valor de holder (país y cantidad)
        for (var prop in holder) {
          tabla.push({ pais: prop, cantidad: holder[prop] });
        }
        // Ordeno los objetos en la lista según cantidad
        tabla.sort((a, b) => {
          return b.cantidad - a.cantidad;
        });
        // Recorro tabla y aplico a los arrays creadas al principio las key y value respectivamente
        tabla.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
          return rowsArray, valuesArray;
        });

        // Cambios de estado

        // parsed para a contener el csv subido
        setParsedData(results.data);
        // tableRows pasa a ser el primer elemento del array de filas "país" y "cantidad"
        setTableRows(rowsArray[0]);
        // values contiene ahora los valores correspondientes: nombre del país y suma final.
        setValues(valuesArray);
        // Se consulta si parsedData deja de ser nulo, si cambió actualiza su contenido.
        parsedData != null
          ? setTitulo("Cantidad de registros según país")
          : setTitulo(null);
      },
    });
  };

  return (
    <div class="container py-5">
      <div class="row h-75 py-5 justify-content-center align-items-center text-center">
        <div class="col-sm-12 py-1">
          <h1 class="font-weight-light">Análisis de csv</h1>
          <h6>
            Suba el archivo csv y obtenga la cantidad de registrados según país
            ordenados de mayor a menor.
          </h6>
        </div>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-sm-12">
          <div class="card w-50 mx-auto bg-light">
            <div class="card-body">
              <h5 class="card-title">Suba su archivo</h5>
              <p class="card-text text-center">
                Asegúrese de que el archivo contenga una columna llamada "pais".
              </p>
              <div className="row justify-content-center align-items-center text-center">
                <div className="col-sm-8">
                  <input
                    class="form-control-file"
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    accept=".csv"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-sm-12">
          <div className="table-responsive">
            <h5 class="py-3">{titulo}</h5>
            <table class="table table-hover table-bordered table-striped mx-auto w-50">
              <thead class="thead-dark">
                <tr>
                  {tableRows.map((rows, index) => {
                    return (
                      <th key={index}>
                        {rows.charAt(0).toUpperCase() + rows.slice(1)}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {values.map((value, index) => {
                  return (
                    <tr key={index}>
                      {value.map((val, i) => {
                        return <td key={i}>{val}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archivo;
