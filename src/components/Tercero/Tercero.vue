<script setup>
import Footer from '../Footer/FooterComponent.vue'
</script>

<template>
  <main>
    <!-- Seccion Introduccion -->
    <section class="container section-introduccion">
      <div class="contenido-introduccion">
        <div class="img-introduccion">
          <a href="#"><img src="../../assets/img/logolaravel.png" alt="Imagen introduccion"></a>
        </div>

        <div>
          <div class="titulo-introduccion">
            <h1>Introduccion</h1>
          </div>
          <p class="texto-introduccion">
            Laravel es un framework de desarrollo web de código abierto basado en el lenguaje de programación PHP. Fue
            creado para facilitar y agilizar el proceso de desarrollo de aplicaciones web, ofreciendo una estructura
            organizada y numerosas características que simplifican tareas comunes.Con Laravel, puedes crear aplicaciones
            web robustas y escalables de manera más eficiente. Su arquitectura
            sigue el patrón de diseño Modelo-Vista-Controlador (MVC), lo que significa que separa claramente la lógica de
            negocio, la presentación y la interacción con la base de datos.
          </p>
          <div>
            <a href="#" class="boton">Documentos</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Seccion Sumario -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Sumario <span>Computo III</span> </h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Contenido # 3</h3>
            <h5>Incorporando tecnologias de Servidor Web</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <ol>
              <li>Formularios Laravel.</li>
              <li>Sistema de ruta y controladores.</li>
              <li>Validacion de datos.</li>
              <li>Blame: Sistema de plantillas avanzado.</li>
              <li>Trajando con Laravel/UI.</li>
              <li>Creacion de API REST con Laravel.</li>
              <li>Consumo de API REST.</li>

            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/sumariolaravel.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>
    </section>
    <!-- Seccion Jornalizacion -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Jornalizacion <span>Computo III</span></h1>
      </div>
      <div class="card sumario-text text-center bg-white  text-black pb-2">
        <div class="card-body">
          <h4>Evaluaciones del computo III</h4>
          <hr>
          <h5>Semana # 16</h5>
          <h6>Laboratorio I - 30% </h6>
          <hr>
          <h5>Semana # 18</h5>
          <h6>Laboratorio II - 40% </h6>
          <hr>
          <h5>Semana # 20</h5>
          <h6>Entrega de Portafolio final de Estudiante - Laboratorio I - 70%</h6>
          <h6>Entrega de repositorio GIT - Laboratorio II - 60%</h6>
          <h6>Parciales del computo III - 40%</h6>
        </div>
      </div>


    </section>
    <!-- Seccion Apuntes -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Apuntes del <span>Computo III</span></h1>
      </div>
      <div id="apuntes-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/apuntescomputo3.png">
              <p class="apuntes-texto">Semana # 15</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/apuntescomputo3i.png">
              <p class="apuntes-texto">Semana # 15</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#apuntes-carrusel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#apuntes-carrusel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>

    <!-- Seccion Proyectos  -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Tareas del <span>Computo III</span></h1>
      </div>
      <div id="tareas-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/tareascomputoiii1.png">
              <div class="testimonio-info">
                <p class="cargo">Laboratorio I - 30%</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/tareascomputoiii2.png">
              <div class="testimonio-info">
                <p class="cargo">Laboratorio II - 40%</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#tareas-carrusel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#tareas-carrusel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>

    <!-- Seccion Investigaciones -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Investigaciones <span>Computo III</span></h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 14: Sistemas de rutas y controladores</h3>
            <h5>Sistemas de rutas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En Laravel, puedes implementar sistemas de rutas utilizando el enrutamiento proporcionado por el framework.
              El enrutamiento en Laravel permite asociar URL específicas a acciones o controladores en tu aplicación.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Archivo de rutas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En Laravel, las rutas se definen en archivos de rutas. Por lo general, encontrarás estos archivos en el
              directorio routes de tu proyecto Laravel. El archivo web.php es utilizado para definir las rutas que están
              accesibles desde un navegador web.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/rutas2.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/rutas.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Definición de rutas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Puedes definir rutas utilizando el helper Route proporcionado por Laravel. Por ejemplo, para definir una
              ruta básica que responda a una solicitud GET, puedes utilizar el método get:
            </p>
          </div>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Grupos de rutas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Puedes agrupar rutas relacionadas utilizando grupos de rutas. Esto te permite aplicar filtros, middleware o
              prefijos de URL a un conjunto de rutas. Por ejemplo:
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/rutas1.png" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/controlador.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Controladores</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En Laravel, los controladores son clases que agrupan la lógica relacionada con las acciones o funciones de
              tu aplicación. Proporcionan una forma estructurada de manejar las solicitudes HTTP y coordinar las
              respuestas correspondientes
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>1. Crear un controlador</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Puedes crear un controlador utilizando el comando Artisan make:controller. Por ejemplo, para crear un
              controlador llamado UserController, ejecuta el siguiente comando en tu terminal:
            </p>
          </div>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>2. Definir métodos de controlador</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Dentro del archivo del controlador recién creado, puedes definir métodos que representen las acciones que
              deseas realizar. Por ejemplo, puedes tener un método index para mostrar una lista de usuarios y un método
              show para mostrar los detalles de un usuario específico.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/controlador1.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/controlador2.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h5>3. Enrutamiento hacia los métodos del controlador</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Puedes utilizar el enrutamiento en Laravel para asociar las rutas con los métodos del controlador
              correspondientes. En el archivo de rutas (routes/web.php), puedes utilizar el método Route:: seguido por el
              nombre del método y la ruta.
            </p>
          </div>
        </div>
      </div>



      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 15: Validacion de datos </h3>
            <h5>Validaciones en Laravel</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Existen varias formas de validar una aplicación para cubrir aspectos de seguridad
              como SQL Injection, ataques XSS o CSRF, algunas de ellas son:
            </p>
            <ol>
              <li>Validación de lado del cliente (Javascript y etiquetas HTML).</li>
              <li>Validación a nivel de base de datos (Migraciones y modelos).</li>
              <li>Validación de formularios (Request).</li>
            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/valiacion.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>1 .Validación del lado del cliente</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Se puede validar que los campos de un formulario sean requeridos al agregar el
              atributo required
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/valiacion1.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>2 .Validación a nivel de base de datos (Migraciones y modelos).</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En Laravel, puedes realizar validaciones a nivel de base de datos utilizando migraciones y modelos. Las
              migraciones te permiten definir la estructura de tus tablas de base de datos, mientras que los modelos
              representan las entidades y contienen la lógica para interactuar con la base de datos.
            </p>
            <ul>
              <li>Migraciones</li>
            </ul>
            <p>
              Las migraciones en Laravel son archivos que te permiten definir la estructura de tus tablas de base de
              datos de forma programática. Puedes utilizar métodos en las migraciones para definir columnas,
              restricciones, índices y más.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/valiacion2.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-desarrollo">
            <ul>
              <li>Modelos</li>
            </ul>
            <p>
              Los modelos en Laravel representan las entidades de tu aplicación y contienen la lógica para interactuar con
              la base de datos. Puedes utilizar los modelos para realizar validaciones adicionales antes de guardar los
              datos en la base de datos.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/valiacion3.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Luego, en tu controlador, puedes utilizar el método validate() para validar los datos antes de guardarlos en
              la base de datos:
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/valiacion4.png" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/api.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 16: API REST con Laravel</h3>
            <h5>Rest API Laravel</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Laravel le permite crear API RESTful de manera fácil y
              rápida. Este podría ser el back-end de una aplicación
              front-end, una fuente de datos para una aplicación
              móvil o un servicio para otras aplicaciones o API.
            </p>
            <p>
              REST significa transferencia de estado
              representacional y es un estilo arquitectónico para la
              comunicación de red entre aplicaciones, que se basa
              en un protocolo sin estado (generalmente HTTP) para
              la interacción.
            </p>
          </div>
        </div>

      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Verbos HTTP</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Los verbos HTTP representan acciones
              En las API RESTful, se utilizan los verbos HTTP como acciones y los puntos finales son los recursos sobre
              los
              que se actúa.
            </p>
            <p>
              Verbos HTTP por su significado semántico:
            </p>
            <ol>
              <li>GET: recuperar recursos</li>
              <li>POST: crear recursos</li>
              <li>PUT: actualizar recursos</li>
              <li>DELETE: eliminar recursos</li>
            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/verbos.png" alt="Imagen Sumario"></a>
        </div>

      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 17: Autenticacion API REST</h3>
            <h5>¿Qué es la autenticación de la API?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Una capa de autenticación se utiliza comúnmente en aplicaciones para permitir a los usuarios iniciar y
              cerrar sesión, proteger la privacidad y limitar los permisos de los usuarios.
            </p>
            <p>
              La implementación de una capa de autenticación puede ser útil para proteger información confidencial y
              garantizar que solo los usuarios autorizados tengan acceso a los recursos protegidos.
            </p>
            <p>
              En este contexto, la "Autenticación de una API basada en tokens" se presenta como un método efectivo de
              autenticación. Los tokens son una forma de validar la identidad de un usuario y se utilizan para permitir el
              acceso a los recursos protegidos. Este enfoque tiene varias ventajas, como ser fácil de implementar,
              proporcionar un buen nivel de seguridad y ser rápido y eficaz. Por estas razones, se considera la forma más
              utilizada de autenticación en la industria a día de hoy
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/token.png" alt="Imagen Sumario"></a>
        </div>

      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Por qué implementar la autenticación basada en tokens</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              La Autenticación Basada en Token es una forma común de autenticación que funciona mediante el
              intercambio de tokens entre el cliente y el servidor. Los tokens se utilizan para validar la identidad del
              usuario y proporcionar acceso a los recursos protegidos. Esta forma de autenticación se considera segura
              porque los tokens pueden ser cifrados y firmados para evitar la manipulación o la suplantación de
              identidad.
            </p>
            <p>
              Sin embargo, es importante tener en cuenta que la seguridad de la Autenticación Basada en Token
              depende en gran medida de la forma en que se implemente. Por ejemplo, es importante utilizar algoritmos
              de cifrado y firma seguros para los tokens, así como garantizar que los tokens no sean almacenados en
              lugares vulnerables. Además, es importante considerar otros factores de seguridad, como la gestión de
              contraseñas y la protección contra ataques
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/token1.png" alt="Imagen Sumario"></a>
        </div>

      </div>
    </section>

    <!-- Seccion Evaluaciones -->
    <section id="proyectos" class="proyectos-recientes seccion-clara d-flex flex-column seccion-evaluaciones ">
      <div class="titulo-sumario">
        <h1>Evaluaciones</h1>
      </div>
      <!-- Galeria de Proyectos -->
      <div class="container text-center proyectos-contenedor">
        <div class="row">
          <!-- Proyecto 1 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/nota.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Laboratorio I - 30%</p>
              </div>
            </div>
          </div>
          <!-- Proyecto 2 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/tareascomputoiii2.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Laboratorio II - 70%</p>
              </div>
            </div>
          </div>
          <!-- Proyecto 3 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/eva92.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Parcial Computo II</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a href="https://github.com/LunaAcosta" target="_blank" rel="noopener noreferrer" class="boton">Ver
          Respositorio</a>
      </div>
    </section>


  </main>
  <Footer />
</template> 
<style scoped>
main {
  background: linear-gradient(to right, #fef0ef, #fff, #fff, #ffff, #ffffff);
  color: #5A5A5A;
}
/* Clases seccion introduccion */
.section-introduccion {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.contenido-introduccion {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  text-align: justify;
}

.img-introduccion {
  align-items: center;
}

.img-introduccion a img {
  width: 70%;
}

.titulo-introduccion {
  text-align: center;
  line-height: 1;
  letter-spacing: 5px;
}

.titulo-introduccion h1 {
  font-size: 70px;
  font-weight: 900;
  color: #FB322A;
}

.texto-introduccion {
  line-height: 2;
  margin: 1.9rem 0;
}

.boton {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 30px;
  color: #FFF;
  text-transform: capitalize;
  transition: 0.3s;
  background: #FB322A;
  text-decoration: none;
}

.boton:hover {
  background: #FFF;
  border: 1px solid #FB322A;
  color: #FB322A;
}

/* Clases seccion sumario */
.titulo-sumario h1 {
  font-size: 70px;
  font-weight: 900;
  color: #FB322A;
  text-align: center;
}

.titulo-sumario h1 span {
  font-size: 70px;
  font-weight: 900;
  color: #222222;
  text-align: center;
}

.contenedor-sumario {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding-top: 5%;
}

.contenido-sumario-titulo h3 {
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 2%;
  color: #FB322A;
}

.contenido-sumario-titulo h5 {
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 2%;
  color: #222222;
}

.contenido-sumario-desarrollo {
  text-align: justify;
}

.img-sumario a img {
  width: 75%;
  align-items: center;
  margin-left: 100px;

}

/* clases seccion apuntes */

.carousel-item {
  height: 500px;
}

/* Evaluaciones */
.seccion-evaluaciones {
  padding: 90px 10% 120px;
}

.proyectos-recientes img {
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  display: block;
  transition: all 0.2s ease;
}

.proyectos-contenedor {
  padding-top: 60px;
  margin-bottom: 40px;
}

.overlay {
  transition: all 0.2s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay p {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 0;
}

.proyecto {
  position: relative;
}

.proyecto:hover img {
  opacity: 0.2;
}

.proyecto:hover .overlay {
  opacity: 1;
}

.overlay .iconos-contenedor {
  display: flex;
}

.overlay i {
  color: black;
  font-size: 60px;
  margin: 10px;
}

.carousel-item .container-carusel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.apuntes-imagenes {
  height: 70%px;
  width: 350px;
  margin: 10px 10px 20px 10px;
}

.apuntes-texto {
  max-width: 10%;
  font-size: 15px;
  text-align: center;
}

/* Clases para la seccion proyectos */

.tareas-imagenes {
  height: 70%;
  width: 70%;
  margin: 10px 10px 20px 10px;
}


@media screen and (max-width: 1075px) {
  .titulo-introduccion h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .texto-introduccion {
    line-height: 1.2;
    margin: 2rem 0;
  }

  /* Responsivo para la seccion sumario */
  .contenedor-sumario {
    padding-top: 2%;
  }

  .titulo-sumario h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .titulo-sumario h1 span {
    font-size: 40px;
    font-weight: 700;
  }

  .contenido-sumario-titulo h3 {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 1%;
  }

  .contenido-sumario-titulo h5 {
    font-size: 18px;
    padding-bottom: 1%;
  }

  .contenido-sumario-desarrollo {
    line-height: 1.2;
  }

  /* Responsivo para jornalizacion */
  .card-body h4,
  h5,
  h6 {
    margin-bottom: 0;
  }

  /* Resposive para seccion apunetes */
  .carousel-item {
    height: 400px;
  }

  .apuntes-imagenes {
    height: 250px;
    width: 250px;
  }
}

@media screen and (max-width: 992px) {
  .section-introduccion .contenido-introduccion {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;

  }

  .texto-introduccion {
    line-height: 1;
    margin: 1rem 0;
  }

  .img-introduccion a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-sumario a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-introduccion a img {
    width: 80%;
    height: 80%;
  }

  .img-sumario a img {
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-bottom: 2px;
  }


  /* Responsivo sumario */
  .contenedor-sumario {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;
  }

  .contenido-sumario-desarrollo {
    line-height: 1;
  }

}


@media screen and (max-width: 467px) {
  .titulo-introduccion h1 {
    font-size: 30px;
    font-weight: 700;
  }

  .texto-introduccion {
    margin: 0.8rem 0;
  }

  .boton {
    font-size: 13px;
    align-content: center;
    font-weight: 500;
    padding: 5px 20px;


  }

  /* Responsivo sumario */
  .contenedor-sumario {
    padding-top: 1%;
  }

  .titulo-sumario h1 {
    font-size: 30px;
    font-weight: 700;
  }

  .titulo-sumario h1 span {
    font-size: 30px;
    font-weight: 700;
  }

  .contenido-sumario-titulo h3 {
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 0.5%;
  }

  .contenido-sumario-titulo h5 {
    font-size: 15px;
    padding-bottom: 0.5%;
  }

  .contenido-sumario-desarrollo ol li {
    line-height: 1;
    font-size: 12px;
  }

  /* Responsivo para jornalizacion */
  .card-body h4 {
    font-size: 18px;
  }

  .card-body h5 {
    font-size: 15px;
  }

  .card-body h6 {
    font-size: 12px;
    margin: 0px;
  }
}
</style>

