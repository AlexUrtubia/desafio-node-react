function Error404() {
    return(
        <div class="container-fluid px-5 py-5">
            <div class="row text-center ">
                <div class="col-lg-12 ">
                    <div class="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div class="error-details">
                            La página que solcita no existe!
                        </div><br />
                        <div class="error-actions">
                            <a href="/" class="btn btn-primary btn-md"><span class="glyphicon glyphicon-home"></span>
                                Volver a Inicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;