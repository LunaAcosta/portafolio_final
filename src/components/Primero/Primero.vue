
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
    <section  class="container proyectos-recientes">
      <div class="titulo-sumario">
        <h1>Proyectos del computo I</h1>
      </div>

      <div class="container text-center proyectos-contenedor">
      <div class="row">
        <!-- Proyecto 1 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="../../assets/img/tarea1.png" alt="Proyecto 1">
            <div class="overlay">
              <p>Proyecto 1</p>
            </div>
          </div>
        </div>
        <!-- Proyecto 2 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="../../assets/img/tarea1.png" alt="Proyecto 1">
            <div class="overlay">
              <p>Proyecto 2</p>
            </div>
          </div>
        </div>
        <!-- Proyecto 3 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="../../assets/img/tarea1.png" alt="Proyecto 1">
            <div class="overlay">
              <p>Proyecto 3</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="text-center">
          <a href="http://github.com/LunaAcosta" class="boton" target="_blank" rel="noopener noreferrer">Ver mas proyectos</a>
      </div> 
    </section>
    <section class="container">
      <div class="titulo-sumario">
        <h1>SEccion </h1>

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
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding-top: 10%;
}
.img-introduccion {
  align-items: center;
}

.img-introduccion a img {
  width: 70%;
}
.titulo-introduccion{
  text-align: center;
  line-height: 1;
  letter-spacing: 5px;
}
.titulo-introduccion h1 {
  font-size: 50px;
  color: #FFFFFD;
  font-weight: 700;
}

.texto-introduccion  {
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
.titulo-sumario h1{
  font-size: 50px;
  color: #FFFFFD;
  font-weight: 700;
  text-align: center;
}
.contenedor-sumario{
  display: grid;
  grid-template-columns: repeat(2,1fr);
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
  width: 60%;
  align-items: center;
  margin-left: 100px;
  
}

/* clases seccion apuntes */

.carousel-item {
  height: 500px;
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

.proyectos-recientes {
  padding: 10%;
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


@media screen and (max-width: 1075px){
  .titulo-introduccion h1 {
  font-size: 40px;
  font-weight: 700;
}
.texto-introduccion  {
  line-height: 1.2;
  margin: 2rem 0;
}
/* Responsivo para la seccion sumario */
.contenedor-sumario{
  padding-top: 2%;
}
.titulo-sumario h1{
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
.card-body h4, h5, h6{
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

@media screen and (max-width: 992px){
  .section-introduccion .contenido-introduccion{
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;
    
  }
  .texto-introduccion  {
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
  .img-introduccion a img{
    width: 20%;
    height: 20%;
  }
  .img-sumario a img{
    width: 20%;
    height: 20%;
    margin-left: 0px;
  }

  
  /* Responsivo sumario */
  .contenedor-sumario{
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;
  }
  .contenido-sumario-desarrollo{
  line-height: 1;
  }

}

@media  screen and (max-width: 467px) {
  .titulo-introduccion h1 {
  font-size: 30px;
  font-weight: 700;
  }
  .texto-introduccion  {
  margin: 0.8rem 0;
}
.boton {
  font-size: 13px;
  align-content: center;
  font-weight: 500;
  padding: 5px 20px;


}
/* Responsivo sumario */
.contenedor-sumario{
  padding-top: 1%;
}
.titulo-sumario h1{
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
.contenido-sumario-desarrollo ol li{
  line-height: 1;
  font-size: 12px;
}
/* Responsivo para jornalizacion */
.card-body h4{
  font-size: 18px;
}
.card-body h5{
  font-size: 15px;
}
.card-body h6{
  font-size: 12px;
  margin: 0px;
}
}
</style>

