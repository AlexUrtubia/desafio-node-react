import { useState } from "react";
import Papa from "papaparse";

function Archivo() {
  const [parsedData, setParsedData] = useState([]);

  const [tableRows, setTableRows] = useState([]);

  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        var datos = results.data;
        console.log(datos);

        datos.forEach((object) => {
          object.cantidad = 1;
        });
        var holder = {};

        datos.forEach(function (d) {
          if (holder.hasOwnProperty(d.pais)) {
            holder[d.pais] = holder[d.pais] + d.cantidad;
          } else {
            holder[d.pais] = d.cantidad;
          }
        });
        console.log("holder", holder);
        var obj2 = [];

        for (var prop in holder) {
          obj2.push({ pais: prop, cantidad: holder[prop] });
        }

        console.log(obj2);
        obj2.sort((a, b) => {
          return b.cantidad - a.cantidad;
        });
        console.log(obj2);

        obj2.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);

        setTableRows(rowsArray[0]);

        setValues(valuesArray);
      },
    });
  };

  return (
    <div class="container-fluid px-5">
      <div class="row h-75 justify-content-center align-items-center text-center">
        <div class="col-lg-12">
          <h1 class="font-weight-light py-2">Análisis de csv</h1>
          <h6>
            Esta aplicación es capaz de analizar la cantidad de registros según
            país,
            <br></br> entregando como resultado una tabla con la cantidades
            agrupadas de mayor a menor.
          </h6>
          <br></br>
          <div class="card w-25 mx-auto bg-light">
            <div class="card-body">
              <h5 class="card-title">Suba su archivo</h5>
              <p class="card-text">
                Asegurese de seleccionar un archivo de registros que contenga
                una columna llamada "pais".
              </p>
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
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-lg-12">
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
  );
}

export default Archivo;
