# Desafío Node y React

Las siguiente aplicación corresponde a una págia web desarrollada como desafío técnico utilizando Node y React.

Corresponde a un sistema sencillo en el que se obtiene un insight a partir de un archivo csv subido por el usuario, más especificamente un archivo de registro del cual se obtiene una taba con la cantidad de registros agrupados por país.

- Esta aplicación está desarrollada para trabajar sobre un archivo csv en particular llamado "registros_1.csv" otorgado para este proyecto, el cual contiene entre sus columnas, una llamada "pais" que es principalmente sobre la que se efectúa el análisis.

- Sin embargo si es que se le otorga algún otro archivo csv que también contenga una columna llamada "pais", tambíen se obtendrá el mismo resultado.

- De acuerdo a lo solicitado, la interfaz de este proyecto cuenta con tres pestañas, una página de inicio donde se entrega un contexto, la página donde se suber el archivo y se obtienen los resultados del análisis y una página de créditos sobre los desarrolladores que trabajaron en su confección.

---
 
Para ejecutar este proyecto es requisito tener unstalado previamente Nodejs en su ordenador.

Luego de clonar el repositorio localmente, ejecute en la terminal el siguiente código para instalar las dependencias.

<pre><code>npm install
</code></pre>

Posteriormente ejecutar
<pre><code>npm start
</code></pre>

Y luego abrir [http://localhost:3000](http://localhost:3000) para ver en su navegador la aplicación.

También es posible ver su funcionamiento directamente desde su [deploy en Heroku](http://localhost:3000)