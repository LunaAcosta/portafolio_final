<script setup>
import Footer from '../Footer/FooterComponent.vue'
</script>

<template>
  <main>
    <!-- Seccion Introduccion -->
    <section class="container section-introduccion">
      <div class="contenido-introduccion">
        <div class="img-introduccion">
          <a href="#"><img src="../../assets/img/php.jpg" alt="Imagen introduccion"></a>
        </div>

        <div>
          <div class="titulo-introduccion">
            <h1>Introduccion</h1>
          </div>
          <p class="texto-introduccion">
            PHP es un lenguaje de programación de código abierto muy popular y ampliamente utilizado en el desarrollo web.
            Fue diseñado específicamente para crear aplicaciones web dinámicas y puede ser incrustado en el código HTML.
            PHP es conocido por ser fácil de aprender y usar, y tiene una gran comunidad de desarrolladores que
            contribuyen con bibliotecas, frameworks y recursos.
            En el desarrollo con PHP, puedes utilizar una amplia gama de características y funcionalidades. Puedes
            declarar variables, trabajar con estructuras de control como condicionales y bucles, y definir funciones para
            reutilizar código.



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
        <h1>Sumario Computo II</h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Contenido # 2</h3>
            <h5>Desarollo Backend con el Framework del lado del servidor y base de datos</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <ol>
              <li>Introduccion al Desarollo con PHP.</li>
              <li>Declaracion de variables.</li>
              <li>Declaracion de funciones.</li>
              <li>Programacion Orientada a Objetos.</li>
              <li>Conexion a base de datos.</li>
              <li>Introduccion a Laravel</li>
              <li>CRUD con Laravel.</li>

            </ol>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/funcion.png" alt="Imagen Sumario"></a>
        </div>
      </div>
    </section>
    <!-- Seccion Jornalizacion -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Jornalizacion Computo II</h1>
      </div>
      <div class="card sumario-text text-center bg-white  text-black pb-2">
        <div class="card-body">
          <h4>Evaluaciones del computo II</h4>
          <hr>
          <h5>Semana # 10</h5>
          <h6>Laboratorio I - 70% </h6>
          <hr>
          <h5>Semana # 11</h5>
          <h6>Laboratorio II - 70% </h6>
          <hr>
          <h5>Semana # 12</h5>
          <h6>Autoevaluacion - Laboratorio II - 10%</h6>
          <hr>
          <h5>Semana # 13</h5>
          <h6>Entrega de repositorio GIT - Laboratorio I - 30%</h6>
          <h6>Entrega de Portafolio de Estudiante - Laboratorio I - 30%</h6>
          <h6>Parciales del computo II - 40%</h6>
        </div>
      </div>


    </section>
    <!-- Seccion Apuntes -->
    <section class="container">
      <div class="titulo-sumario">
        <h1>Apuntes del computo II</h1>
      </div>
      <div id="apuntes-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/computo2i.png">
              <p class="apuntes-texto">Semana # 8</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/computo2ii.png">
              <p class="apuntes-texto">Semana # 8</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/computo2iii.png">
              <p class="apuntes-texto">Semana # 9</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="apuntes-imagenes" src="../../assets/img/computo2iv.png">
              <p class="apuntes-texto">Semana # 10</p>
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
        <h1>Tareas del computo II</h1>
      </div>
      <div id="tareas-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/s9.png">
              <div class="testimonio-info">
                <p class="cargo">Ejercicios practicos</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/s91.png">
              <div class="testimonio-info">
                <p class="cargo">Repositorio de practicas</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-carusel">
              <img class="tareas-imagenes" src="../../assets/img/s92.png">
              <div class="testimonio-info">
                <p class="cargo">Portafolio de estudiante</p>
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
        <h1>Investigaciones del computo II</h1>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 7: Introduccion al desarrollo con php</h3>
            <h5>¿ Qué es php ?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              PHP es un lenguaje de código abierto muy popular, adecuado para desarrollo web y que puede ser incrustado en
              HTML. Es popular porque un gran número de páginas y portales web están creados con PHP.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>¿ Cómo funciona ?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              El usuario escribe una URL una ruta o dirección para poder localizar una página web,imagen, servidor etc. en
              su navegador y éste envía un petición al servidor web.Un servidor web es la maquina o computador donde se
              almacena una página web. El servidor lee la página PHP (la interpreta). Envía al navegador del usuario un
              documento compilado en formato HTML
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>¿ Qué puede hacer ?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Permite la ejecución de scripts en la parte del servidor. Se necesitan tres elementos: El analizador PHP
              (CGI ó módulo), un servidor web y un navegador.
            </p>
            <p>
              Ejecución de scripts desde la línea de comandos sin la necesidad de un servidor Web o navegador. Escritura
              de aplicaciones gráficas clientes por medio de una extensión llamada PHP-GTK
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/phpc.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/phpfuncioones.jpg" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 8: Loops, Arrays y funciones</h3>
            <h5>Bucles</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Un bucle en PHP se usa para ejecutar una declaración o un bloque de declaraciones, varias veces hasta que se
              cumpla una condición específica.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>FOR</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Este tipo de bucles se utiliza cuando el usuario sabe de antemano cuántas veces debe ejecutarse el bloque.
              Es decir, el número de iteraciones se conoce de antemano.
              Este tipo de bucles también se conocen como bucles controlados por entrada.
              Hay tres parámetros principales para el código: la inicialización, la condición de prueba y el contador.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>WHILE</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              El ciclo while también es un ciclo de control de entrada como para los ciclos, es decir, primero verifica la
              condición al comienzo del ciclo y, si es verdadero, ingresa al ciclo y ejecuta el bloque de instrucciones, y
              continúa ejecutándose como siempre y cuando la condición sea cierta.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>FOREACH</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Este bucle se utiliza para iterar sobre matrices. Para cada contador de bucle, se asigna un elemento de
              matriz y el siguiente contador se desplaza al siguiente elemento.
            </p>
          </div>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 9: Programacion Orientada a Objetos</h3>
            <h5>¿ Qué POO ?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              La Programación Orientada a Objetos (POO u OOP según sus siglas en inglés) es un paradigma de programación
              que usa objetos y sus interacciones para diseñar aplicaciones y programas de computadora. Está basado en
              varias técnicas, incluyendo herencia, modularidad, polimorfismo, y encapsulamiento. Su uso se popularizó a
              principios de la década de 1990. Actualmente son muchos los lenguajes de programación que soportan la
              orientación a objetos.

            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Abstracción</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              La abstracción es un proceso de interpretación y diseño que implica reconocer y enfocarse en las
              características importantes de una situación u objeto, y filtrar o ignorar todas las particularidades no
              esenciales.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Encapsulamiento</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              El encapsulamiento consiste en agrupar en una Clase las características(atributos) con un acceso privado y
              los comportamientos (métodos) con un acceso público.
            </p>
          </div>
        </div>

        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/poo.png" alt="Imagen Sumario"></a>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/herecia.png" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h5>Herencia</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Es una propiedad que permite crear clases a partir de otras ya existentes, obteniendo características
              (métodos y atributos) similares a los ya existentes.
            </p>
          </div>

          <div class="contenido-sumario-titulo">
            <h5>Polimorfismo</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Son comportamientos diferentes, asociados a objetos distintos, pueden compartir el mismo nombre; al
              llamarlos por ese nombre se utilizará el comportamiento correspondiente al objeto que se esté usando.
            </p>
          </div>

          <div class="contenido-sumario-titulo">
            <h5>Clase</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Una Clase es la Implementación total o parcial de un tipo abstracto de dato, para mayor compresión podemos
              visualizar las clases como los esquemas o moldes que nos permitirán crear objetos o instancias concretas.
              Una clase es por tanto una plantilla implementada en Software que describe un conjunto de objetos con
              atributos y comportamiento similares.
            </p>
          </div>


        </div>
      </div>

      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 10: Clases abstractas e interfaces</h3>
            <h5>Clases Abstractas</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Las clases abstractas no pueden ser instanciadas.
              Pueden declarar la existencia de los métodos, pero no su implementación.
              Puede contener métodos no-abstractos, pero debe de contener al menos un método abstracto
              Los métodos abstractos deben ser definidos en las clases heredadas, pero deben tener la misma visibilidad.
              La implementación debe tener la misma “firma”: la declaración de tipos y el número de argumentos.
              Las clases abstractas están implementadas desde la versión 5.4.0.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>Interfaces</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Las interfaces nos permiten crear código con el cual especificar qué métodos deben ser implementados por una
              clase (prototipos), sin definir su implementación. Las interfaces se definen con la palabra reservada
              interface. Los métodos declarados en una interfaz deben ser públicos. Para implementar una interface desde
              una clase se utiliza la palabra reservada implements. Una clase puede implementar más de una interfaz si se
              desea.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/clase.jpg" alt="Imagen Sumario"></a>
        </div>
      </div>

      <div class="contenedor-sumario">
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/laravelintro.jpg" alt="Imagen Sumario"></a>
        </div>
        <div>
          <div class="contenido-sumario-titulo">
            <h3>Semana 11: Introduccion a larevel </h3>
            <h5>MVC</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Modelo-Vista-Controlador (MVC) es un patrón arquitectónico que separa una aplicación en tres componentes
              lógicos principales Modelo, Vista y Controlador. De ahí la abreviatura MVC.
              Cada componente de la arquitectura está construido para manejar un aspecto de desarrollo específico de una
              aplicación. MVC separa la lógica empresarial y la capa de presentación entre sí.
            </p>
          </div>
          <div class="contenido-sumario-titulo">
            <h5>HTTP</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              HTTP es un protocolo que permite la obtención de recursos, como documentos HTML. Es la base de cualquier
              intercambio de datos en la Web y es un protocolo cliente-servidor, lo que significa que las solicitudes son
              iniciadas por el destinatario, generalmente el navegador Web.
            </p>
          </div>
        </div>
      </div>
      <div class="contenedor-sumario">
        <div>
          <div class="contenido-sumario-titulo">
            <h5>¿ Que es laravel ?</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Laravel es un Framework con una sintaxis elegante y expresiva. Un Framework proporciona una estructura y un
              punto de partida para crear aplicaciones. Laravel se esfuerza por proporcionar una experiencia de
              desarrollador increíble, al tiempo que proporciona funciones poderosas como la inyección de dependencias
              exhaustiva, una capa de abstracción de base de datos expresiva, colas y trabajos programados, pruebas de
              integración y unidad, y más.
            </p>
          </div>

          <div class="contenido-sumario-titulo">
            <h5>Servidores</h5>
          </div>
          <div class="contenido-sumario-desarrollo">
            <p>
              Una de las grandes ventajas de Laravel es la cantidad de opciones que ofrece para crear entornos de
              desarrollo.
            </p>
          </div>
        </div>
        <div class="img-sumario">
          <a href="#"><img src="../../assets/img/laravel.png" alt="Imagen Sumario"></a>
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
              <img src="../../assets/img/eva9.png" alt="Proyecto 1">
              <div class="overlay">
                <p>Laboratorio I - 70%</p>
              </div>
            </div>
          </div>
          <!-- Proyecto 2 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto">
              <img src="../../assets/img/eva91.png" alt="Proyecto 1">
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
  background: linear-gradient(to right, #0b0c3a, #100f47, #171054, #211061, #2c0e6e, #400d74, #530a7a, #65067f, #7d0e7e, #921a7e, #a4277d, #b5367d);
  color: #D4EBFB;
}

main h3 {
  color: #40D291;
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
  color: #FBF8FF;
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
  background: #00C9B7;
  text-decoration: none;
}

.boton:hover {
  background: #FFA0A6;
  border: 1px solid #10D1F0;
}

/* Clases seccion sumario */
.titulo-sumario h1 {
  font-size: 70px;
  font-weight: 900;
  color: #00C9B7;
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
  color: #E8A9C8;
}

.contenido-sumario-titulo h5 {
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 2%;
  color: #FBF8FF;
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


