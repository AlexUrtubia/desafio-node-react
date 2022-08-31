function Home() {
  return (
    <div class="container-fluid px-5">
      <div class="row h-100 justify-content-center align-items-center text-center">
        <div class="col-lg-12">
          <h1 class="font-weight-light">Bienvenid@!</h1>
          <p>Esta aplicación web ha sido creada utilizando Reactjs y Nodejs.</p>
          <div class="card mx-auto bg-light mb-7 w-75">
            <div class="card-body">
            <p class="card-text">El objetivo de esta herramienta es generar un análisis sencillo a partir de un archivo csv de registros.<br></br>
              Dirigase a <a href="/archivo">archivo</a>, y suba un archivo de extensión csv para comenzar.</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;