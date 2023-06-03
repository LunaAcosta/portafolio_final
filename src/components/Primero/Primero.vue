
<script setup>
import Footer from '../Footer/FooterComponent.vue'
</script>

<template>
  <main>
    <!-- Seccion Introduccion -->
    <section class="container section-introduccion">
      <div class="contenido-introduccion">
        <div class="img-introduccion">
          <a href="#"><img src="../../assets/img/intro.jpeg" alt="Imagen introduccion"></a>
        </div>

        <div>
          <div class="titulo-introduccion">
            <h1>Introduccion</h1>
          </div>
          <p class="texto-introduccion">
            JavaScript y Bootstrap son dos tecnologías importantes en el desarrollo web moderno.
            JavaScript es un lenguaje de programación que se utiliza para crear sitios web dinámicos e interactivos. Fue
            desarrollado por Netscape en los años 90 y es utilizado por casi todos los sitios web en la actualidad.
            JavaScript se ejecuta en el lado del cliente (es decir, en el navegador del usuario) y permite que los
            desarrolladores agreguen interactividad, animación y otras características avanzadas a sus sitios web.
            Bootstrap, por otro lado, es un marco de diseño front-end que se utiliza para crear sitios web con una
            apariencia coherente y moderna.
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
        <h1>Sumario Computo I</h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Contenido # 1</h3>
            <h5>Desarollo Frontend con librerrias del lado del cliente</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <ol>
              <li>Introduccion a JavaScript Básico.</li>
              <li>Introduccion a las librerrias (Vue.js y Bootstrap).</li>
              <li>Redering declarativo y manipulacion del DOM.</li>
              <li>Introduccion al rendenring declarativo.</li>
              <li>Expresiones, propiedades y control de flujos con directivas.</li>
              <li>Renderizado de lista.</li>
              <li>Menejo de eventos clases y estilos en tiempo real.</li>
              <li>Sistema de componentes.</li>
              <li>Crear componentes custom.</li>
              <li>Comunicacion entre componentes: propiedades y eventos.</li>
            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/sumario.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>
    </section>
    <!-- Seccion Jornalizacion -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Jornalizacion Computo I</h1>
      </div>
      <div class="card sumario-text text-center bg-white  text-black pb-2">
        <div class="card-body">
          <h4>Evaluaciones del computo I</h4>
          <hr>
          <h5>Semana # 3</h5>
          <h6>Laboratorio I - 70% </h6>
          <hr>
          <h5>Semana # 4</h5>
          <h6>Laboratorio II - 80% </h6>
          <hr>
          <h5>Semana # 5</h5>
          <h6>Entrega de repositorio GIT - Laboratorio I - 30% </h6>
          <h6>Autoevaluacion - Laboratorio II - 10% </h6>
          <h6>Coevaluacion - Laboratorio II - 10% </h6>
          <hr>
          <h5>Semana # 6</h5>
          <h6>Parciales del computo I - 40% </h6>
        </div>
      </div>


    </section>
    <!-- Seccion Apuntes -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Apuntes del computo I</h1>
      </div>
      <div id="apuntes-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s1.png">
              <p class="apuntes-texto">Semana # 1</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s1_1.png">
              <p class="apuntes-texto">Semana # 1</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s2.png">
              <p class="apuntes-texto">Semana # 2</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s2_1.png">
              <p class="apuntes-texto">Semana # 2</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s2_2.png">
              <p class="apuntes-texto">Semana # 2</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s2_3.png">
              <p class="apuntes-texto">Semana # 2</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s3.png">
              <p class="apuntes-texto">Semana # 3</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s3_1.png">
              <p class="apuntes-texto">Semana # 3</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s3_2.png">
              <p class="apuntes-texto">Semana # 3</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s4.png">
              <p class="apuntes-texto">Semana # 4</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s4_1.png">
              <p class="apuntes-texto">Semana # 4</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s4_2.png">
              <p class="apuntes-texto">Semana # 4</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s5.png">
              <p class="apuntes-texto">Semana # 5</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/s5_1.png">
              <p class="apuntes-texto">Semana # 5</p>
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
        <h1>Tareas del computo I</h1>
      </div>
      <div id="tareas-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/tarea1.png">
              <div class="testimonio-info">
                <p class="cargo">Sitio Html BootStrap JavaScript</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/tarea2.png">
              <div class="testimonio-info">
                <p class="cargo">Sitio Html BootStrap JavaScript</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/tarea3.png">
              <div class="testimonio-info">
                <p class="cargo">Sitio Html BootStrap JavaScript</p>
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
        <h1>Investigaciones del computo I</h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 1: Introduccion a JavaScript</h3>
            <h5>¿Qué es JavaScript?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Es un lenguaje de programación que usualmente se usa para crear páginas web interactivas. En pocas palabras
              mediante JavaScript podemos editar y modificar toda lo que interactúa con el usuario, para brinda así una
              experiencia agradable.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Funcionamiento JavaScript</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En este lenguaje el código es interpretado, básicamente se traduce a código de lenguaje de maquina mediante
              un motor de JavaScript (motor V8).
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>JavaScript puede ser utilizado tanto del lado del cliente como del lado del servidor.</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Lado del cliente: en este apartado hace referencia a la forma en como este lenguaje funciona en el navegador
              que el usuario utiliza (el motor está dentro del código del navegador, usualmente todos los navegadores lo
              tienen incorporado). Las funciones que se asocian con los eventos realizan cambios en HTML Y CSS.
            </p>
            <p>
              Lado del servidor: hace referencia al uso del lenguaje de codificación en lógica del servidor de Backend (el
              motor se encuentra directamente en el servidor). Del lado del servidor una función puede acceder a la base
              de datos, realizar operaciones lógicas y responder a eventos desencadenados por el sistema operativo del
              servidor.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/javascript.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/bootstrap.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 2: Bootstrap, VueJS</h3>
            <h5>¿Qué es Bootstrap?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Es un marco de desarrollo web que permite y ayuda a los desarrolladores a crear interfaces web. Se concibió
              el 19 de agosto de 2011 por Mark Otto y Jacob Thornton, es de código abierto, cabe mencionar que es uno de
              los frameworks más populares. Al inicio Bootstrap 1 era una colección de CSS que permitía diseñar sitios
              web. El enfoque del marco sigue siendo el mismo, permitir a los desarrolladores crear diseños y ayudar a
              desarrollar una apariencia agradable con interactividad.

            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Diseño:</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              El marco presenta contenedores responsivos, permisos de ajustes del diseño de la página, así mismo un diseño
              de cuadricula de 12, con columnas para organizar de manera flexible los elementos, permite elementos
              multimedia que funcionan como bloques.
            </p>
          </div>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>¿Qué es VueJS?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Marco progresivo que permite construir interfases de usuario. La biblioteca principal se centra solo en la
              capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. Es capaz de
              impulsar aplicaciones sofisticadas de una sola página cuando se usa en combinación con herramientas modernas
              y bibliotecas de soporte.
              Es una librería JS pensada para tener un framework para desarrollar paginas web. Con este se pueden crear
              todas las vistas de una página web, hacerse dinámicas, así mismo se pueden conectar a un servidor para tener
              datos dinámicos de una BD.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Características Vue.JS</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <ol>
              <li>Modularidad</li>
              <li>Reactividad</li>
              <li>Componentes Web</li>
              <li>Virtual DOM</li>
              <li>Eventos y transacciones</li>
              <li>Mixins</li>
              <li>Lifecicle</li>
              <li>Aplicaciones SPA</li>
            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/vue.png" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/directivas.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 3: Rendenring declarativo, directivas personalizadas, representacion de lista </h3>
            <h5>Rendering declarativo</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Es una opción propuesta pro VueJS para interactuar con el DOM.
            </p>
            <ol>
              <li>Vista: HTML</li>
              <li>Estado: Datos JS</li>
              <li>Usuario: Interactúa e introduce cambios en la vista.</li>
            </ol>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Directivas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Estas son atributos especiales de Vue que se colocan en las etiquetas HTML y están prefijados por v-.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Las directivas están formadas por:</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <ol>
              <li>Directiva: nombre de la directiva.</li>
              <li>Argumento: parámetro.</li>
              <li>Modificador: modificar el comportamiento.</li>
              <li>Valor: se requiere establecer un valor.</li>
            </ol>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Tipos de directivas:</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Las directivas personalizadas proporcionan un mecanismo para asignar cambios de datos a un comportamiento
              arbitrario de DOM.
            </p>
          </div>

        </div>
      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 4: Eventos, Manejadores de eventos , Modificadores de eventos, Clases y estilos en tiempo real.
            </h3>
            <h5>¿Qué son los eventos?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              En JS interacción con el usuario se consigue mediante la captura de eventos. Un evento es la acción que
              realiza un usuario ante la cual puede realizarse algún proceso, estos se capturan mediante los manejadores
              de eventos.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Manejadores de eventos en Vue.JS</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Se puede utilizar la directiva v-on para escuchar eventos del DOM.
            </p>
            <p>
              Vue.js proporciona modificadores de eventos para v-on para manejar detalles de eventos DOM,
              como:event.preventDefault() Oevent.stopPropagation()
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Clases y estilos reactivos</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Binding:class
            </p>

            <ul>
              <li>
                Usando: class se puede definir clases al igual que con el atributo class pero aquí se usa comillas simples
                dentro de las comillas dobles.
              </li>
            </ul>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Binding: style
            </p>

            <ul>
              <li>
                Usando: style se puede cambiar el estilo de algún elemento HTML en tiempo de ejecución.
              </li>
            </ul>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/manejador.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/com.jpg" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 5: Sistemas de componentes, Introduccion al sistema de componentes, Crear componentes custom </h3>
            <h5>Componentes</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Es la forma de reutilizar una instancia de vue las veces que sean necesarias. Estos permiten crear elementos
              propios html, con sus propias propiedades y métodos que se pueden reutilizar en toda la aplicación.
              Sintaxis para creación de componentes: Vue.component(“name”, {options})
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Registro Global de componentes</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Se realiza al llamar al método component de Vue. Que un componente se registre de forma global significa que
              estará disponible en cualquier componente de Vue no importa cuán anidado esté.
            </p>
          </div>
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
              <img src="../../assets/img/eva1.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Laboratorio I - 70%</p>
              </div>
            </div>
          </div>
          <!-- Proyecto 2 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/eva2.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Repositorio Practica - 30%</p>
              </div>
            </div>
          </div>
          <!-- Proyecto 3 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/eva3.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Portafolio - 80% Laboratorio II</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a href="https://github.com/LunaAcosta" target="_blank" rel="noopener noreferrer" class="boton" >Ver Respositorio</a>
      </div>
    </section>


  </main>
  <Footer />
</template> 
<style scoped>
main {
  background-image: linear-gradient(to right top, #281483, #351e8c, #412896, #4d329f, #583ca9, #6846b1, #7851b8, #875cc0, #9d6ac8, #b17acf, #c589d7, #d79ae0);
  color: white;
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
  font-size: 50px;
  color: #FFFFFD;
  font-weight: 700;
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
  border-radius: 10px;
  text-transform: capitalize;
  transition: 0.3s;
  background: #10D1F0;
  text-decoration: none;
}

.boton:hover {
  background: #FFA0A6;
  border: 1px solid #10D1F0;
}

/* Clases seccion sumario */
.titulo-sumario h1 {
  font-size: 50px;
  color: #FFFFFD;
  font-weight: 700;
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
}

.contenido-sumario-titulo h5 {
  font-size: 20px;
  padding-bottom: 2%;
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
    width: 20%;
    height: 20%;
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

