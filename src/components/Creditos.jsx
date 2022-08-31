import React from "react";

const Creditos = () => {
  return (
    <div className="container-fluid px-5">
      <div class="row h-100 justify-content-center align-items-center text-center">
        <div class="col-lg-12">
          <h1 class="font-weight-light">Créditos</h1>
          <br></br>
          <h6>
            La tabla a continuación muestra los desarrolladores que han
            participado en la confección de esta aplicación
          </h6>
          <br></br>
          <table class="table mx-auto w-75">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Linkedin</th>
                <th scope="col">Github</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alex Urtubia</td>
                <td>+56977943048</td>
                <td>
                  <a href="https://www.linkedin.com/in/alex-urtubia/">
                    linkedin.com/alex-urtubia
                  </a>
                </td>
                <td>
                  <a href="https://github.com/AlexUrtubia">@AlexUrtubia</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Creditos;
